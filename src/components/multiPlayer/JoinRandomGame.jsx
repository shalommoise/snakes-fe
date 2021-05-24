import React, { Component } from 'react';
import {getLiveGames} from '../../utils/api'
import {Link} from '@reach/router'
import * as api from '../../utils/api' 
class JoinRandomGame extends Component {
  state ={
    clicked: false,
    isLoading: true, 
    liveGames: [],
    isName: false 
  };
  componentDidUpdate(prevProps, prevState){
    if(prevState.isName !== this.state.isName)  {
   
      getLiveGames().then((liveGames)=>this.setState({liveGames, isLoading: false}))
      }
  }
  handleChange =(event)=>{
       const {name, value} = event.target
        this.setState({[name]: value})
  }
  handleClick =()=>{
this.setState({isName: true})
  }

  sendName =(event)=>{
      const { userName}= this.state;
      const {id} = event.target
    
      api.enterPlayer2(id, userName);
  }
  render() {
      const {clicked, isLoading, liveGames, isName, userName} = this.state;
    return (
    
      <div className="Links">
        {!clicked ?
        <p onClick={()=>this.setState({clicked: !clicked})}> Join a random game </p> :
         !isName  ?
          <div> <label htmlFor="userName"></label>
          <input type="text" id="userName" name="userName" placeholder="Enter your username here" onChange={this.handleChange}/> <button onClick={this.handleClick} disabled={!userName}>Submit</button></div> : isLoading ? 
          <p>Loading... </p> : 
          liveGames.length >0 ?
          liveGames.map((game)=>{
          return (<div key={game._id} className="playerList">
            <Link className="Links" to={`/multi-player/${game._id}/2`}>
        <button onClick={this.sendName} id={game._id}> 
         
             Play with {game.player1} 
    
             </button>
                      </Link> 
          </div>)
        }) :
        <p>No live games at the moment</p>
        }
      
      </div>
    );
  }
}

export default JoinRandomGame;