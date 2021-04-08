import React from 'react';
import * as utils from "../utils/utils"
const GamePixel = (props) => {
  const {index, size, /*head, body,*/ snake, food} = props;
    const {indexConverter, splitSnake, isPixelCoordinate} = utils
  const pixel = indexConverter(size, index);
 


const checkPixel =()=>{
  let className = 'pixel';
const head = splitSnake(snake)[0];
const body =splitSnake(snake)[1];
if(isPixelCoordinate(head, pixel)) className = 'head';
if(isPixelCoordinate(food, pixel)) className = 'food';
let count = 0; 
body.forEach((piece)=>{
  if(isPixelCoordinate(piece, pixel)) count++
});
if(count) className = 'body';
    return className;
}

  return (
   <div className={checkPixel()}  name={index} id={pixel} ></div>
  );
};

export default GamePixel;