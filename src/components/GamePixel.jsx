import React from 'react';
import * as utils from "../utils/utils"
const GamePixel = (props) => {
  const {index,size} = props;
  const {indexConverter} = utils
//   const indexConverter = (size, index)=>{
//   if(!index && index !== 0 || !size) return [];
//   const newI = index + 1;
//  const remiander = newI % size;
//   const x = remiander ?  Math.ceil(newI/size): newI/size;
//   const y = remiander ?  remiander : size;
//   return [x, y]
// }
  return (
    <div className="pixel"  name={index} id={indexConverter(size, index)} >
      
    </div>
  );
};

export default GamePixel;