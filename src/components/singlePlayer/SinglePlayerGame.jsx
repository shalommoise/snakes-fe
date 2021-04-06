import React from 'react';
import GamePixel from "../GamePixel"
const SinglePlayerGame = (props) => {
  const {userName, size} = props;
  const array = [];
  const create = ()=>{
      let num = 1;
    while (num <= size*size){
        array.push(" ")
      num++;
    }
   }
  
 
  return (
    
    <div >
      <h3>{userName}</h3>
      {create()}
<div className="game">
{array.map((pixel, index)=>{
return  <GamePixel key={index} index={index} size={size}/>
})}
    </div>
    </div>
  );
};

export default SinglePlayerGame;