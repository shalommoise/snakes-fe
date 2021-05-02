import React from 'react';
import * as utils from "../utils/utils"
const GamePixel = (props) => {
  const {index, size, snake, food, number, snake2} = props;

    const {indexConverter, splitSnake, isPixelCoordinate} = utils
  const pixel = indexConverter(size, index);


const checkPixel =()=>{
  let className = 'pixel';
  if(number) {
    let n = 0; 
number.forEach((piece)=>{
  if(isPixelCoordinate(piece, pixel)) n++
});
if(n) className = 'body';
  }
  else {
const head = splitSnake(snake)[0];
const body = splitSnake(snake)[1];
if(isPixelCoordinate(head, pixel)) className = 'head';
if(isPixelCoordinate(food, pixel)) className = 'food';



let count = 0; 
body.forEach((piece)=>{
  if(isPixelCoordinate(piece, pixel)) count++
});
if(count) className = 'body';
if(snake2) {
const head2 = splitSnake(snake2)[0];
const body2 = splitSnake(snake2)[1];
if(isPixelCoordinate(head2, pixel)) className = 'head2';
let count2 = 0; 
body2.forEach((piece)=>{
  if(isPixelCoordinate(piece, pixel)) count2++
});
if(count2) className = 'body2';
}
}
  return className;
}

  return (
   <div className={checkPixel()}  name={index} id={pixel} ></div>
  );
};

export default GamePixel;