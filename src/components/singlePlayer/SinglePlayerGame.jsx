import React, { Component } from 'react';
import GamePixel from "../GamePixel"
import * as api from "../../utils/api";
import {moveSnake, checkKey, isPixelCoordinate} from "../../utils/utils";
import {count} from '../../utils/countdown';
import SingleGameStats from './SingleGameStats'
class SinglePlayerGame extends Component  {
  state = {
    userName: this.props.userName,
    points: 0,
    player2: '',
    snake2: [],
    isLoading: true,
    pixelCount: this.props.pixelCount,
    countDown: 4,
    food: [],
    snake1: [],
    size: 30,
    movement: "right"
  }

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
        this.startGame(this.localId);
        setInterval(() => {
  this.snakeMoving();
}, 100);
        
  }
  componentWillUnmount(){
    const {food, snake1} = this.state;
    api.foodEaten('6079b4adba28a1764b96421e', snake1, food)
  }

handleKeyDown= (e)=> {

  const {movement, active} = this.state; 
if(e.keyCode === 32 || e.keyCode === 13) this.setState({ active: !active})
else  this.setState({movement: checkKey(e.keyCode, movement)})
}

componentDidUpdate(prevProps, prevState) {
  const {countDown, active}= this.state
  if(countDown && active){
   setTimeout(() => {
     this.countGame(countDown) 
    }, 1000);

} 

  if(isPixelCoordinate(this.state.snake1[0], this.state.food)) {  
api.getSingleGame(this.localId).then((game)=>this.setState({food: game.food}));   
  }
  
}

  snakeMoving = ()=>{
    const {snake1, food, active , movement} = this.state;  
let newSnake = active ?  moveSnake(snake1, movement) : snake1;
    if(isPixelCoordinate(newSnake[0], food)) api.foodEaten('6079b4adba28a1764b96421e', newSnake, food).then((game)=>{
       const {food, points1} = game;
     newSnake = moveSnake(this.state.snake1, this.state.movement, true);
       this.setState({food, points: points1, snake1: newSnake})
    })
    
   else this.setState({snake1: newSnake});
      }
              
  render(){
        const {userName,points, size, snake1, food, isLoading, pixelCount, active, countDown} = this.state;
        

      return (
       
<div onKeyDown={this.handleKeyDown}>
   <SingleGameStats userName={userName} points={points}/>
{isLoading ? <p>Loading...</p> : countDown > 0? 
<div>
  {/* <SingleGameStats userName={userName} points={points}/> */}
      <button onClick={()=>{this.setState({active: true})}}><p>Click to start</p></button>
   <div className="game" >
{pixelCount.map((pixel, index)=>{
   return  <GamePixel key={index} index={index} size={size} snake={snake1} food={food} number={count[countDown]}/>
})}
    </div>
</div> :
    <div  >
      {/* <SingleGameStats userName={userName} points={points}/> */}
   <button onClick={()=>{this.setState({active: !active})}}>{active ? <p>Pause</p> : <p>Play</p>}</button>
 
   
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

