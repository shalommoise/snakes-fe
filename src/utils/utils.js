 export  const indexConverter = (size, index)=>{
  if(!index && index !== 0 || !size) return [];
  const newI = index + 1;
 const remiander = newI % size;
  const x = remiander ?  remiander : size;
  const y = remiander ?  Math.ceil(newI/size): newI/size;
  
  return [x, y]
}

export const strSnakeToNumSnake = (snake)=>{
  if(!snake || !snake.length) return [];
  return snake.map((piece)=> + piece ? + piece : piece.map((num)=> + num))
} 

export const moveSnake = (snake, direction)=>{
 const copySnake = strSnakeToNumSnake(snake);
 const oldHead = copySnake[0];
 const [x,y] = oldHead;
 const newHead = [x + direction.x, y + direction.y];
  copySnake.unshift(newHead);
  copySnake.pop();
  
   return copySnake;
}