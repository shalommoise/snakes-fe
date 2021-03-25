import React, { Component } from 'react';
import {  Link } from "@reach/router";
class SinglePlayer extends Component {
  state= {
    player1: '',
    player2: '',
    snake2: ''
  }
  
  render() {
   
    return (
      <div>
        <h2>Single-Player</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SinglePlayer;