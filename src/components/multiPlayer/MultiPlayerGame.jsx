import React, { Component } from 'react';
import * as api from '../../utils/api';
import {count} from '../../utils/countdown';
import {create, moveSnake, isPixelCoordinate ,isSnakeEatingItself, overlap} from '../../utils/utils'
import GamePixel from "../GamePixel";
import MultiPlayerStats from './MultiPlayerStats';
import {Link} from '@reach/router';
import CopyUrl from './CopyUrl';

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
    size: 30,
    copied: false,
    i:0
  }
  
componentDidMount(){
  const {id, player}= this.props
this.setState({pixelCount: create()})
  api.getSingleGame(id).then((game)=>{
   const {player1, snake1, active, date, food, player2, snake2, game_over, randomPlayerJoin} = game
 this.setState({player1, snake1, active, date, food, player2, snake2, isLoading: false, currentPlayer: player, game_over, randomPlayerJoin})
  })
        setInterval(() => {
   this.snakeMoving(player);
 
}, 500);
 this.prepareGame(player);
  setInterval(() => {
const {i, active} = this.state;
let j =active ? i + 1:i;
this.setState({i:j})
  }, 1000);
}

 componentDidUpdate(prevProps, prevState) {
  const {countDown, start, player2, _id,currentPlayer}= this.state;
  if(player2 !== prevState.player2) this.setState({start: true})
  if(countDown && start){
    
   setTimeout(() => {
     this.countGame(countDown) 
    }, 1000);
} else if(countDown !==prevState.countDown)  {
 
  api.pauseOrPlay(_id, true).then(()=>
       this.setState({active: true}))}
  if(isSnakeEatingItself(this.state[`snake${currentPlayer}`])) api.editSnake(_id,[], currentPlayer).then((game)=>this.setState({[`snake${currentPlayer}`]: game[`snake${currentPlayer}`]}))
 }

 countGame =(number)=>{
  const newNumber = number - 1;
number ? this.setState({countDown: newNumber, isLoading: false}) :
this.setState({active:true}); 
} 


snakeMoving = (n)=>{
     const {snake1, active , food, snake2, i} = this.state;
  const movement = i < 2 ?  'up': this.props.movement ? this.props.movement: 'up';

    const currentSnake = 1 === + n ? snake1 : snake2;

const newSnake = !active ? currentSnake : isPixelCoordinate(currentSnake[0], food) ? moveSnake(currentSnake, movement, true) : moveSnake(currentSnake, movement, false);
    this.setState({[`snake${n}`]: newSnake});
     
}
     prepareGame =(n)=>{
         setInterval(() => {
          
           const {_id, currentPlayer} =this.state;
             
       const currentSnake =  this.state[`snake${currentPlayer}`];
        const otherPlayer = + currentPlayer === 1 ? 2 :1;
    
    const differentSnake = this.state[`snake${otherPlayer}`];
    if(!overlap(differentSnake, currentSnake)) api.editSnake(_id, currentSnake, n);
     api.getSingleGame(_id).then((game)=>{
    
      this.setState({food: game.food, points1: game.points1, points2: game.points2, [`snake${otherPlayer}`]: game[`snake${otherPlayer}`], active: game.active, player2: game.player2})
     if(overlap(differentSnake, currentSnake)) this.setState({[`snake${currentPlayer}`]: game[`snake${currentPlayer}`]})
    })
    
      

}, 500);
      
     }
     pauseGame = ()=>{
       const {active, _id} = this.state;
       const opposite = !active;
       api.pauseOrPlay(_id, opposite).then(()=>{
       this.setState({active: opposite});
        
       })
     }
  
  render() {
    const {_id,isLoading, pixelCount,countDown, size ,snake1, snake2, food, active,player1, player2, points1, points2, currentPlayer, copied, randomPlayerJoin, i} = this.state;
    const {player} = this.props
    return (
     <div>
   <MultiPlayerStats player1={player1} player2={player2} points1={points1} points2={points2} currentPlayer={currentPlayer} i={i}/>
  {   isLoading ? 
  <p>Loading...</p> :
   countDown > 0?  
     <div>
       {(!copied && player ==='1' && countDown > 3) && 
             <CopyUrl url={_id} randomPlayerJoin={randomPlayerJoin} /> }
      
       <div className="game">
     {pixelCount.map((pixel, index)=>{
         return  <GamePixel key={index} index={index} size={size} number={count[countDown]}/>
         })}
    </div>
      </div> :
    <div>
     <button onClick={this.pauseGame}>{active ? <p>Pause</p> : <p>Play</p>}</button> 
     <div className="game">
        {pixelCount.map((pixel, index)=>{
          return  <GamePixel key={index} index={index} size={size} snake={snake1} food={food} snake2={snake2}/>
           })}
    </div>
    {!snake1.length && <p>{player1} is out</p>}
    {!snake2.length && <p>{player2} is out</p>}
    </div>  }
    <br />
    <Link  className="Links" to="/">Home</Link>
    </div>
    );
  }
}

export default MultiPlayerGame;