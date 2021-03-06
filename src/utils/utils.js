 export  const indexConverter = (size, index)=>{
  if((!index && index !== 0) || !size) return [];
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
    left: {x:-1, y:0},
    still: {x:0, y:0}
  }

export const moveSnake = (snake, direction, eat)=>{
  if(!snake.length) return snake;
 const copySnake = strSnakeToNumSnake(snake);
 const oldHead = copySnake[0];

 if ((direction === 'down' && oldHead[1] === 30) ||
    (direction === 'up' && oldHead[1] === 1) ||
     (direction === 'left' && oldHead[0] === 1 )||
     (direction === 'right' && oldHead[0] === 30) 
    ) {
    return [];   
 } else {
 const [x,y] = strSnakeToNumSnake(oldHead);
 const newHead = [x + directions[direction].x, y + directions[direction].y];
  copySnake.unshift(newHead);
  if(!eat) copySnake.pop();
      return copySnake;
   }
}
export const checkKey = (keyCode, prevMove)=> {
 

    if (keyCode === 38 && prevMove !== 'down')  return 'up';
    
     if (keyCode === 40 && prevMove !== 'up')  return 'down';
    
     if (keyCode === 37 && prevMove !== 'right')  return 'left';  
    
     if (keyCode ===  39 && prevMove !== 'left')  return 'right';
    
    else return prevMove;
}

export  const splitSnake =(snake)=>{
     const body = [...snake];
    const head = body.shift();
     return [head, body];
  }

  export const isPixelCoordinate = (coordinate, pixel)=>{
  let isCoordinate = false;
  if(!coordinate) return isCoordinate;
  if(coordinate[0] === pixel[0] && coordinate[1] === pixel[1]) isCoordinate = true; 
  return isCoordinate; 
}

export const isSnakeEatingItself = (snake)=>{
  let snakeEatItself = false;
if(!snake || !snake.length) return snakeEatItself;
 const [head, body] =  splitSnake(snake);
body.forEach((piece)=>{
  if(isPixelCoordinate(piece, head)) snakeEatItself = true;
})
  return snakeEatItself;
}
export const  create = ()=>{
      const arr = [];
      let num = 1;
    while (num <= 900){
        arr.push(" ")
         num++;
    }
    return arr;
   }

   export const isCurrentPlayer = (player, currentPlayer) => {
  
     return player === + currentPlayer ? "currentPlayer" : "otherPlayer"; 
   }

  export const overlap =(snakeA, snakeB)=>{
    if(!snakeA || !snakeB) return false;
    if(!snakeA.length || !snakeB.length) return false;
    if(typeof snakeA === "string" || typeof snakeB === "string") return false;
    let isOverlap = false;
    const copySnakeA = [...snakeA];
    const copySnakeB = [...snakeB];
    const headA = copySnakeA.shift();
    
    copySnakeB.shift();
    copySnakeB.forEach((part)=>{if(isPixelCoordinate(headA,part)) isOverlap = true})
    return isOverlap;

  }

   export const checkUri =(uri)=>{
    const address = uri.split("/")[1];
    return address
  
  }
 export const changeUri = (address)=>{
    const newAddress = address.split('');
    const letter = newAddress.shift();
    newAddress.unshift(letter.toUpperCase());
    const index = newAddress.indexOf("-");
    newAddress[index +1] = newAddress[index +1].toUpperCase();
     return newAddress.join("");
  }
  