import React from 'react';

const MultiPlayerStats = (props) => {
  const {player1, player2, points1, points2}= props;
  return (
    <div>
     <h3>{player1} : {points1}</h3>
      <h3>{player2} : {points2}</h3>
    </div>
  );
};

export default MultiPlayerStats;