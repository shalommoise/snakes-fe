import React, { Component } from 'react';
import {  Link } from "@reach/router";
class MultiPlayer extends Component {
  render() {
    return (
      <div  className="frame">
         <h2>Multi-Player</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default MultiPlayer;