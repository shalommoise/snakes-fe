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
    player2: null,
    snake2: [],
    isLoading: true,
    pixelCount: this.props.pixelCount,
    countDown: 4,
    food: [],
    snake1: [],
    size: 30,
    movement: "right",
    start: false
  }


   startGame = (player1, snake2, player2)=>{
    api.postGame(player1, snake2, player2)
    .then((game)=>{
      const {snake1, food, points1, game_over, active,size, _id} = game;
      this.setState({snake1, food, points: points1, game_over, active,size, _id, isLoading: false})
    })
  
  }
   
countGame =(number)=>{
  const newNumber = number - 1;
number ? this.setState({countDown: newNumber, isLoading: false}) :
this.setState({active:true}); 
} 
  componentDidMount(){
    const {userName,player2, snake2} = this.state
    this.startGame(userName, snake2, player2); 
        
        setInterval(() => {
  this.snakeMoving();
}, 100);
        
  }
  componentDidUpdate(prevProps, prevState) {
  const {countDown, start, food, _id}= this.state
  if(countDown && start){
   setTimeout(() => {
     this.countGame(countDown) 
    }, 1000);
} else if(countDown !==prevState.countDown) this.setState({active: true})
if(prevState.food !==food) api.getSingleGame(_id).then((game)=>this.setState({food: game.food, points: game.points1}))

  }


handleKeyDown= (e)=> {
  const {movement, active} = this.state; 
if(e.keyCode === 32 || e.keyCode === 13) this.setState({ active: !active})
else  this.setState({movement: checkKey(e.keyCode, movement)})
}


  snakeMoving = ()=>{
    const {snake1, active , movement, food, _id} = this.state;  
const newSnake = !active ? snake1 : isPixelCoordinate(snake1[0], food) ? moveSnake(snake1, movement, true) : moveSnake(snake1, movement, false);
    this.setState({snake1: newSnake});
    if(isPixelCoordinate(snake1[0], food)) {
 
      api.foodEaten(_id, snake1, food)
    .then((game)=>{
      
      this.setState({food: game.food, points: game.points1})})
  }
     }
              
  render(){
        const {userName,points, size, snake1, food, isLoading, pixelCount, active, countDown} = this.state;
      
   return (
       
<div onKeyDown={this.handleKeyDown}>
   <SingleGameStats userName={userName} points={points}/>
{isLoading ? <p>Loading...</p> : countDown > 0? 
<div>
    <button onClick={()=>{this.setState({start: true})}}><p>Click to start</p></button>
   <div className="game">
{pixelCount.map((pixel, index)=>{
   return  <GamePixel key={index} index={index} size={size} snake={snake1} food={food} number={count[countDown]}/>
})}
    </div>
</div> :
    <div>
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

