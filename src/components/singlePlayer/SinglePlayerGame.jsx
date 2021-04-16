import React, { Component } from 'react';
import GamePixel from "../GamePixel"
import * as api from "../../utils/api";
import {moveSnake, checkKey, isPixelCoordinate} from "../../utils/utils";
import {count} from '../../utils/countdown';
class SinglePlayerGame extends Component  {
  state = {
    userName: this.props.userName,
    points: 0,
    player2: '',
    snake2: [],
    isLoading: true,
    pixelCount: this.props.pixelCount,
    countDown: 3,
    food: [],
    snake1: [],
    size: 30
  }
  //get game by id
  //move snake
  // eat food, food eaten => get score
localId = '6079b4adba28a1764b96421e'
   startGame = (id, player1, player2, snake2)=>{
    // api.postGame(player1, player2, snake2)
    // .then((game)=>{
    //   const {snake1, food, points1, game_over, active,size, _id} = game;
    //   this.setState({snake1, food, points1, game_over, active,size, _id, isLoading: false})
    // })
    api.getSingleGame(id).then((game)=>{
    const {snake1, food, points1, game_over, active,size, _id} = game;
      this.setState({ snake1, food, points: points1, game_over, active, size, _id, isLoading: false, movement: 'right'})
     
 
    })
  }
   gameStats = ()=>{
      // global api.getSingleGame("606ee9f0ae02d60015b13a79").then((game)=>console.log(game.points1))
      api.getSingleGame(this.localId).then((game)=>console.log('points:',game.points1))
      console.log('snakeLength:', this.state.snake1.length)
   }
countGame =(number)=>{
  const newNumber = number - 1;
number ? this.setState({countDown: newNumber, isLoading: false}) :
this.startGame(this.localId);
this.setState({active:true}); 
}
  componentDidMount(){
    // const {userName,player2, snake2} = this.state
    // this.startGame(userName,player2, snake2); 
        this.startGame(this.localId)
  }
  componentWillUnmount(){
    const {food, snake1} = this.state;
    api.foodEaten('6079b4adba28a1764b96421e', snake1, food)
  }

handleKeyDown= (e)=> {
  const {movement, active} = this.state; 

if(e.keyCode === 32 || e.keyCode === 13) this.setState({ active: !active})

  this.setState({movement: checkKey(e.keyCode, movement)})
}
componentDidUpdate(prevProps, PrevState) {
  const {countDown}= this.state
  if(countDown){
   setTimeout(() => {
     this.countGame(countDown) 
    }, 1000);
} 
setInterval(() => {
  this.snakeMoving()
}, 10000);
  if(isPixelCoordinate(this.state.snake1[0], this.state.food)) {  
api.getSingleGame(this.localId).then((game)=>this.setState({food: game.food}));   
}
  
}

  snakeMoving = ()=>{
    const {snake1, movement, food, active } = this.state;  
let newSnake = active ?  moveSnake(snake1, movement) : snake1;
    if(isPixelCoordinate(newSnake[0], food)) api.foodEaten('6079b4adba28a1764b96421e', newSnake, food).then((game)=>{
       const {food, points1} = game;
     newSnake = moveSnake(this.state.snake1, this.state.movement, true);
       this.setState({food, points: points1})
    })
    
    this.setState({snake1: newSnake});
      }
              
  render(){
        const {userName,points, size, snake1, food, isLoading, pixelCount, active, countDown} = this.state;
        

      return (
       
<div>
{isLoading ? <p>Loading...</p> : countDown > 0? 
<div>
    <h3>Name: {userName}</h3>
      <h3>Score: {points} </h3>
   <div className="game">
{pixelCount.map((pixel, index)=>{
   return  <GamePixel key={index} index={index} size={size} snake={snake1} food={food} number={count[countDown]}/>
})}
    </div>
</div> :
    <div  onKeyUpCapture={this.handleKeyDown}>
      <h3>Name: {userName}</h3>
      <h3>Score: {points} </h3>
   <button onClick={this.snakeMoving}>Moves</button>
   <button onClick={this.gameStats}> get game</button>
   {active ? <p>Pause</p> : <p>Play</p>}
<div className="game">
{pixelCount.map((pixel, index)=>{
   return  <GamePixel key={index} index={index} size={size} snake={snake1} food={food}/>
})}
    </div>
    </div>  }
    </div>
  );
}
};

export default SinglePlayerGame;

