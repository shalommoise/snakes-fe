import React from 'react';
import {  Link } from "@reach/router";
import OwnGameStart from './multiPlayer/OwnGameStart';
import EnterCode from './multiPlayer/EnterCode';
import JoinRandomGame from './multiPlayer/JoinRandomGame'

const MultiPlayer = () => {
  return (
      <div  className="frame">
         <h2>Multi-Player</h2>
        <Link className="Links" to="/">Home</Link>
        <div className="multi-game_options">
          <JoinRandomGame className="Links"/>
          <OwnGameStart className="Links"/>
          <EnterCode />
        </div>
   
   

   

      </div>
  );
};

export default MultiPlayer;
