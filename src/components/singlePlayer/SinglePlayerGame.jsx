import React, { Component } from 'react';
import GamePixel from "../GamePixel"
import * as api from "../../utils/api";
import {moveSnake, checkKey, isPixelCoordinate} from "../../utils/utils";
class SinglePlayerGame extends Component  {
  state = {
    userName: this.props.userName,
    points: 0,
    player2: '',
    snake2: [],
    isLoading: true,
    pixelCount: this.props.pixelCount
  }
  //get game by id
  //move snake
  // eat food, food eaten => get score
  
   startGame = (id, player1, player2, snake2)=>{
    // api.postGame(player1, player2, snake2)
    // .then((game)=>{
    //   const {snake1, food, points1, game_over, active,size, _id} = game;
    //   this.setState({snake1, food, points1, game_over, active,size, _id, isLoading: false})
    // })
    api.getSingleGame(id).then((game)=>{
    const {snake1, food, points1, game_over, active,size, _id} = game;
      this.setState({ snake1, food, points1, game_over, active, size, _id, isLoading: false, movement: 'right',})
     
 
    })
  }
   gameStats = ()=>{
      // global api.getSingleGame("606ee9f0ae02d60015b13a79").then((game)=>console.log(game.points1))
      api.getSingleGame("6075d9bc5cbcde6eb77a80ab").then((game)=>console.log(game.points1))
   }

  componentDidMount(){
    // const {userName,player2, snake2} = this.state
    // this.startGame(userName,player2, snake2); 
    // 6075d9bc5cbcde6eb77a80ab
   //global  this.startGame('606ee9f0ae02d60015b13a79')
     this.startGame('6075d9bc5cbcde6eb77a80ab')
  }
handleKeyDown= (e)=> {
  const {movement} = this.state; 

 if(checkKey(e.keyCode, movement) !== movement) this.setState({movement: checkKey(e.keyCode, movement)})
}
componentDidUpdate(prevProps, PrevState) {
  // console.log(PrevState.snake1, this.state.snake1)
  if(isPixelCoordinate(this.state.snake1[0], this.state.food))  api.getSingleGame('6075d9bc5cbcde6eb77a80ab').then((game)=>this.setState({food: game.food}))
  
}

  snakeMoving = ()=>{
    const {snake1, movement, food } = this.state;  
const newSnake =  moveSnake(snake1, movement);
    if(isPixelCoordinate(newSnake[0], food)) api.foodEaten(/*'606ee9f0ae02d60015b13a79'*/'6075d9bc5cbcde6eb77a80ab', newSnake, food).then((game)=>{
       const {food, points1} = game;
       console.log(food, points1)
       this.setState({food, points: points1})
    })
    this.setState({snake1: newSnake});
      }
       
  render(){
        const {userName,points, size, snake1, food, isLoading, pixelCount} = this.state;
       
      return (
        
<div>
{isLoading ? <p>Loading...</p> : 
    <div  onKeyUpCapture={this.handleKeyDown}>
      <h3>Name: {userName}</h3>
      <h3>Score: {points} </h3>
   <button onClick={this.snakeMoving}>Moves</button>
   <button onClick={this.gameStats}> get game</button>
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

