import React from 'react';
import {isCurrentPlayer} from '../../utils/utils'
const MultiPlayerStats = (props) => {
  const {player1, player2, points1, points2, currentPlayer,i}= props;
  
  return (
    <div>
     <h3 className={isCurrentPlayer(1, currentPlayer)}>{player1} : {points1}</h3>
      <h3 className={isCurrentPlayer(2, currentPlayer)}>{player2} : {points2}</h3>
      <p>Time: {i}</p>
    </div>
  );
};

export default MultiPlayerStats;