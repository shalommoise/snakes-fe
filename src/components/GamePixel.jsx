import React from 'react';

const GamePixel = (props) => {
  const {index} = props;
  return (
    <div className="pixel"  name={index} id={index} >
      
    </div>
  );
};

export default GamePixel;