import React, { Component } from 'react';
import GamePixel from "../GamePixel"
import * as api from "../../utils/api";
import {moveSnake, checkKey} from "../../utils/utils";
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
      this.setState({ snake1, food, points1, game_over, active,size, _id, isLoading: false, movement: 'right',})
     
 
    })
  }
   splitSnake =(snake)=>{
     const body = [...snake];
    const head = body.shift();
     return [head, body];
  }
  

  componentDidMount(){
    // const {userName,player2, snake2} = this.state
    // this.startGame(userName,player2, snake2); 
     this.startGame('606ee9f0ae02d60015b13a79')
  }
handleKeyDown= (e)=> {
  const {movement} = this.state; 

 if(checkKey(e.keyCode, movement) !== movement) this.setState({movement: checkKey(e.keyCode, movement)})
}


  snakeMoving = ()=>{
    const {snake1, movement } = this.state  
    this.setState({snake1: moveSnake(snake1, movement)})
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

