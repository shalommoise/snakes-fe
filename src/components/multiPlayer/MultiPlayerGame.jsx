import React, { Component } from 'react';
import * as api from '../../utils/api';
import {count} from '../../utils/countdown';
import {create, moveSnake, checkKey, isPixelCoordinate, isSnakeEatingItself} from '../../utils/utils'
import GamePixel from "../GamePixel";
import MultiPlayerStats from './MultiPlayerStats'
import {Link} from '@reach/router'
class MultiPlayerGame extends Component {
  state = {
    _id: this.props.id,
    player1: "player",
    snake1: [] ,
    active: false, 
    date: "", 
    food: [], 
    points1: 0, 
    player2: "player2", 
    snake2: [], 
    points2: 0, 
    game_over: false,
    isLoading: true,
   pixelCount: [],
    countDown: 4,
    movement: "right",
    size: 30
  }
  
componentDidMount(){
this.setState({pixelCount: create()})
  api.getSingleGame(this.props.id).then((game)=>{
   const {player1, snake1, active, date, food, player2, snake2} = game
 this.setState({player1, snake1, active, date, food, player2, snake2, isLoading: false, currentPlayer: this.props.player})
  })
        setInterval(() => {
   this.snakeMoving(this.props.player);
}, 100);
}
 componentDidUpdate(prevProps, prevState) {
  const {countDown, start}= this.state
  if(countDown && start){
    
   setTimeout(() => {
     this.countGame(countDown) 
    }, 1000);
} else if(countDown !==prevState.countDown) this.setState({active: true})
 }

 countGame =(number)=>{
  const newNumber = number - 1;
number ? this.setState({countDown: newNumber, isLoading: false}) :
this.setState({active:true}); 
} 

handleKeyDown= (e)=> {
  const {movement, active} = this.state; 
if(e.keyCode === 32 || e.keyCode === 13) this.setState({ active: !active})
else  this.setState({movement: checkKey(e.keyCode, movement)})
}
snakeMoving = (n)=>{
    const {snake1, active , movement, food, _id, snake2} = this.state;
    const currentSnake = 1 === + n ? snake1 : snake2;
   
const newSnake = !active ? currentSnake : isPixelCoordinate(currentSnake[0], food) ? moveSnake(currentSnake, movement, true) : moveSnake(currentSnake, movement, false);
    this.setState({[`snake${n}`]: newSnake});
       const other = +n === 1 ? 'snake2' : 'snake1'
     api.editGame(_id, snake1, food, snake2)
    .then(()=> api.getSingleGame(_id).then((game)=>this.setState({food: game.food, points1: game.points1, points2: game.points2, [other]: game[other]})))

     }
  render() {
    const {isLoading, pixelCount,countDown, size ,snake1, snake2, food, active,player1, player2, points1, points2, currentPlayer} = this.state;
    return (
      <div onKeyDown={this.handleKeyDown}>
   <MultiPlayerStats player1={player1} player2={player2} points1={points1} points2={points2} currentPlayer={currentPlayer}/>
  {   isLoading ? 
  <p>Loading...</p> :
   countDown > 0? 
     <div>
        <button onClick={()=>{this.setState({start: true})}}><p>Click when you are ready</p></button>
       <div className="game">
     {pixelCount.map((pixel, index)=>{
         return  <GamePixel key={index} index={index} size={size} number={count[countDown]}/>
         })}
    </div>
      </div> :
    <div>
    <button onClick={()=>{this.setState({active: !active})}}>{active ? <p>Pause</p> : <p>Play</p>}</button> 
     <div className="game">
        {pixelCount.map((pixel, index)=>{
          return  <GamePixel key={index} index={index} size={size} snake={snake1} food={food} snake2={snake2}/>
           })}

    </div>
    </div>  }
    <Link to="/">Home</Link>
    </div>
    );
  }
}

export default MultiPlayerGame;