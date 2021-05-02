import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://snakes-be.herokuapp.com/api/",
  baseURL: "http://localhost:9090/api/",
});
export const postGame =(player1, snake2, player2)=>{
  return axiosInstance
  .post('games/', {player1, snake2, player2})
  .then(({data: {game}})=>{
    return game;
  }).catch((err)=>err)
}

export const getSingleGame =(id)=>{
return axiosInstance
.get(`games/${id}`).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}


export const editGame =(id, snake1, food, snake2)=>{
  return axiosInstance
.patch(`games/${id}`, {snake1, food, snake2}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}

export const changeNames =(id, player1, player2) =>{
   return axiosInstance
.patch(`games/${id}`, {player1, player2}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}