import React, { Component } from 'react';
import GamePixel from "../GamePixel"
import * as api from "../../utils/api";
class SinglePlayerGame extends Component  {
  state ={
    userName: this.props.userName,
    points: 0,
    player2: '',
    snake2: [],
    isLoading: true
  }
   startGame = (player1, player2, snake2)=>{
    api.postGame(player1, player2, snake2)
    .then((game)=>{
      const {snake1, food, points1, game_over, active,size} = game;
      this.setState({snake1, food, points1, game_over, active,size, isLoading: false})
    })
  }
   splitSnake =(snake)=>{
     console.log('snake:',snake)
    const body = [...snake];
    const head = body.shift();
  console.log('newSnake:', [head, body])
    return [head, body];
  }
   array = [];
   create = ()=>{
      let num = 1;
    while (num <= Math.pow(this.state.size,2)){
        this.array.push(" ")
      num++;
    }
   }
  componentDidMount(){
    const {userName,player2, snake2} = this.state
    this.startGame(userName,player2, snake2); 
  }
  render(){
        const {userName,points, size, snake1, food, isLoading} = this.state;
        console.log(this.state)
          this.create();
  return (
<div>
{isLoading ? <p>Loading...</p> : 
    <div >
      <h3>Name: {userName}</h3>
      <h3>Score: {points} </h3>
    
<div className="game">
{this.array.map((pixel, index)=>{
return  <GamePixel key={index} index={index} size={size} head={this.splitSnake(snake1)[0]} body={this.splitSnake(snake1)[1]} food={food}/>
})}
    </div>
    </div>  }
    </div>
  );
}
};

export default SinglePlayerGame;

