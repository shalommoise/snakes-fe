import React, { Component } from 'react';
import {getLiveGames} from '../../utils/api'
import {Link} from '@reach/router'
class JoinRandomGame extends Component {
  state ={
    clicked: false,
    isLoading: true, 
    liveGames: []
  };
  componentDidUpdate(prevProps, prevState){
    if(prevState.clicked !== this.state.clicked)  {
   
      getLiveGames().then((liveGames)=>this.setState({liveGames, isLoading: false}))
      }
  }
  render() {
      const {clicked, isLoading, liveGames} = this.state;
    return (
    
      <div className="icon">
        {!clicked ?<p onClick={()=>this.setState({clicked: !clicked})}> Join a random game </p>: isLoading ? <p>Loading... </p> : liveGames.map((game)=>{
          return (<div id={game._id} key={game._id} className="playerList">
          <Link to={`/multi-player/${game._id}/2`}>  <p>Play with {game.player1}</p> </Link>
          </div>)
        })}
      
      </div>
    );
  }
}

export default JoinRandomGame;