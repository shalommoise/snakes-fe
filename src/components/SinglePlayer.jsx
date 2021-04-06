import React, { Component } from 'react';
import {/* Router,*/ Link } from "@reach/router";
import SinglePlayerGame from "./singlePlayer/SinglePlayerGame";

class SinglePlayer extends Component {
  state= {
    player1: 'player1',
     gameOn: false
  }
 
  handleChange=(changeEvent)=>{
     const {value} = changeEvent.target;
     
     this.setState({player1: value})
  }
  start=()=>{
this.setState({gameOn: true});
  }
  
  render() {
   
    return (
      
      <div className="frame">
        <h2>Single-Player</h2>
      {!this.state.gameOn ?  <div>       
          <label htmlFor="userName"></label>
          <input type="text" id="userName" name="userName" placeholder="Enter your username here" onChange={this.handleChange}/>
     <br/>
     <button onClick={this.start}>Start</button>
       
      </div>
     : <SinglePlayerGame userName={this.state.player1}/>
  }
       <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SinglePlayer;