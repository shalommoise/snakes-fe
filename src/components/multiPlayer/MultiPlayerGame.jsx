import React, { Component } from 'react';
import * as api from '../../utils/api';
import {count} from '../../utils/countdown';
import {create} from '../../utils/utils'
import GamePixel from "../GamePixel";
class MultiPlayerGame extends Component {
  state = {
    player1: "player",
    snake1: [] ,
    active: false, 
    date: "", 
    food: [], 
    points1: 0, 
    player2: "player", 
    snake2: [], 
    points2: 0, 
    game_over: false,
    isLoading: true,
   pixelCount: [],
    countDown: 4
  }
  
componentDidMount(){
this.setState({pixelCount: create()})
  api.getSingleGame(this.props.id).then((game)=>{
   const {player1, snake1, active, date, food, player2, snake2} = game
 this.setState({player1, snake1, active, date, food, player2, snake2, isLoading: false})
  })
}
  render() {
    const {isLoading, pixelCount,countDown, size ,snake1, snake2, food, active} = this.state;
    return (
      <div onKeyDown={this.handleKeyDown}>
   {/* <SingleGameStats userName={userName} points={points}/> */}
  {   isLoading ? 
  <p>Loading...</p> :
   countDown > 0? 
     <div>
        <button onClick={()=>{this.setState({start: true})}}><p>Click to start</p></button>
       <div className="game">
     {pixelCount.map((pixel, index)=>{
         return  <GamePixel key={index} index={index} size={size} snake={snake1} snake2={snake2} food={food} number={count[countDown]}/>
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
}

export default MultiPlayerGame;