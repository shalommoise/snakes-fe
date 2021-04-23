import React from 'react';

const SingleGameStats = (props) => {
  const {userName, points}= props
  return (
    <div>
      <h3>Name: {userName}</h3>
      <h3>Score: {points} </h3>
    </div>
  );
};

export default SingleGameStats;