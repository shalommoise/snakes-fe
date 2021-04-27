import React, { Component } from 'react';
import {  Link } from "@reach/router";
class MultiPlayer extends Component {
  render() {
    return (
      <div  className="frame">
         <h2>Multi-Player</h2>
        <Link to="/">Home</Link>
        <div className="multi-game_options">
          <div>Join random Game</div>
           <div>Start your own Game</div>  
        </div>
   <div className="Copy_code_from_friend">
     Enter Code from friend

    </div>

      </div>
    );
  }
}

export default MultiPlayer;