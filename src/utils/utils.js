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
const directions = {
    up: {x: 0, y: -1},
    down: {x:0, y: 1},
    right: {x:1, y:0},
    left: {x:-1, y:0}

  }

export const moveSnake = (snake, direction)=>{
  
 const copySnake = strSnakeToNumSnake(snake);
 const oldHead = copySnake[0];
 const [x,y] = strSnakeToNumSnake(oldHead);
 const newHead = [x + directions[direction].x, y + directions[direction].y];
  copySnake.unshift(newHead);
  copySnake.pop();

   return copySnake;
}

export const checkKey = (keyCode, prevMove)=> {
 

//  if(keyCode === 32 ||keyCode === 13 )    

    if (keyCode === 38) {
       
          if(prevMove !== 'down')  return 'up';
    }
    else if (keyCode ===40) {
    
        if(prevMove !== 'up')  return 'down';
    }
    else if (keyCode === 37) {
     
       if(prevMove !== 'right')  return 'left';
        
    }
    else if (keyCode ===  39) {
  
        if(prevMove !== 'left')  return 'right';
    }
    else return prevMove;

}

export  const splitSnake =(snake)=>{
     const body = [...snake];
    const head = body.shift();
     return [head, body];
  }