import React, { Component } from 'react';
import * as api from '../../utils/api';
import {count} from '../../utils/countdown';
import {create, checkKey} from '../../utils/utils'
import GamePixel from "../GamePixel";
import MultiPlayerStats from './MultiPlayerStats'
import {Link} from '@reach/router'
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
    countDown: 4,
    size: 30
  }
  
componentDidMount(){
this.setState({pixelCount: create()})
  api.getSingleGame(this.props.id).then((game)=>{
   const {player1, snake1, active, date, food, player2, snake2} = game
 this.setState({player1, snake1, active, date, food, player2, snake2, isLoading: false})
  })
}
 componentDidUpdate(prevProps, prevState) {
  const {countDown, start,_id,snake1}= this.state
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
  render() {
    const {isLoading, pixelCount,countDown, size ,snake1, snake2, food, active} = this.state;
    return (
      <div onKeyDown={this.handleKeyDown}>
   <MultiPlayerStats />
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