import React from 'react';
import * as utils from "../utils/utils"
const GamePixel = (props) => {
  const {index, size, head, body, food} = props;
    const {indexConverter} = utils
  const pixel = indexConverter(size, index);
  let className = 'pixel';
const checkPixel = (coordinate, pixel)=>{
  let isCoordinate = false;
  if(coordinate[0] === pixel[0] && coordinate[1] === pixel[1]) isCoordinate = true; 
  return isCoordinate; 
}
if(checkPixel(head, pixel)) className = 'head';
if(checkPixel(food, pixel)) className = 'food';
// if(body.filter((piece)=>checkPixel(food, pixel)).length > 0);
let count = 0; 
body.forEach((piece)=>{
  if(checkPixel(piece, pixel)) count++
  
});
if(count) className = 'body';
  return (
    <div className={className}  name={index} id={pixel} >
      
    </div>
  );
};

export default GamePixel;