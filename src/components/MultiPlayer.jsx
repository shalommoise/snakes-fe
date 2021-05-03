import React from 'react';
import {  Link } from "@reach/router";
import OwnGameStart from './multiPlayer/OwnGameStart';
import EnterCode from './multiPlayer/EnterCode';


const MultiPlayer = () => {
  return (
      <div  className="frame">
         <h2>Multi-Player</h2>
        <Link to="/">Home</Link>
        <div className="multi-game_options">
          <div className="icon">Join random Game</div>
          <OwnGameStart />
        </div>
   <div className="Copy_code_from_friend">
    <EnterCode />

    </div>

      </div>
  );
};

export default MultiPlayer;
