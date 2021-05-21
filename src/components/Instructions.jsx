import React from 'react';
import {  Link } from "@reach/router";

const Instructions = () => {
  return (
    <div  className="frame">
      <h2>Instructions</h2>
      <div className="how_to_play">
      <p>The simple mobile game brought to the big (desktop) screen. <br />
       The rules are simple: </p>
       <ul>
      <li> You have a snake, your snake is hungry.</li>
      <li> You control the snake, so move it around towards the food.</li>
      <li>The more it eats, the bigger it gets, the more ppoints you get.</li>
      <li>Make sure not to hit the walls or bite your tail.</li>  
        </ul>
       Now you can play against your friends.
      
      <h3>Single-Player</h3>
      <p>Not ready for multi-player? The single-player version allows you to play and practice.</p>
      <h3>Multi-Player</h3>
      <ul>
        <li>Start a new game, send the code to your friend and wait for them to log on.</li>
        <li>You compete with your friend's snake for food and points.</li>
        <li>If you bite your friend's snake, it will shrink them without losing points.</li>
        <li>Don't have any friend? No problem? You can pick the random play to play with anyone else if you like.</li>
      </ul>
      </div>
      <div className="instruction_selection">
      <Link className="Links" to="/">Home</Link>
      <Link className="Links" to="/single-player">Single-Player</Link>
      <Link className="Links" to="/multi-player">Multi-Player</Link>
    </div>
    </div>
  );
};

export default Instructions;