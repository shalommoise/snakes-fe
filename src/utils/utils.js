 export  const indexConverter = (size, index)=>{
  if(!index && index !== 0 || !size) return [];
  const newI = index + 1;
 const remiander = newI % size;
  const x = remiander ?  remiander : size;
  const y = remiander ?  Math.ceil(newI/size): newI/size;
  
  return [x, y]
}

export const moveSnake = (snake, direction)=>{

}