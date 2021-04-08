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
      this.setState({snake1, food, points1, game_over, active,size, _id, isLoading: false})
    })
  }
   splitSnake =(snake)=>{
     const body = [...snake];
    const head = body.shift();
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
    // this.startGame(userName,player2, snake2); 
    this.startGame('606ee9f0ae02d60015b13a79')
  }
  directions = {
    up: {x: 0, y: -1},
    down: {x:0, y: 1},
    right: {x:1, y:0},
    left: {x:-1, y:0}

  }
  render(){
        const {userName,points, size, snake1, food, isLoading} = this.state;
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

