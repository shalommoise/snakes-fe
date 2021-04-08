 export  const indexConverter = (size, index)=>{
  if(!index && index !== 0 || !size) return [];
  const newI = index + 1;
 const remiander = newI % size;
  const x = remiander ?  remiander : size;
  const y = remiander ?  Math.ceil(newI/size): newI/size;
  
  return [x, y]
}

// directions = {
//     up: {x: 0, y: -1},
//     down: {x:0, y: 1},
//     right: {x:1, y:0},
//     left: {x:-1, y:0}

//   }
export const moveSnake = (snake, direction)=>{
 const copySnake = [...snake];
 const oldHead = copySnake[0];
 const [x,y] = oldHead;
 const newHead = [x + direction.x, y + direction.y];
  copySnake.unshift(newHead);
  copySnake.pop();
  
   return copySnake;
}