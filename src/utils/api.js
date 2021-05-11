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


export const editGame =(id, snake, food, player)=>{
  return axiosInstance
.patch(`games/${id}`, {[`snake${player}`]: snake, food}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}

export const editSnake=(id, snake, player) =>{
    return axiosInstance
.patch(`games/${id}`, {[`snake${player}`]: snake}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}

export const changeNames =(id, player1, player2) =>{
   return axiosInstance
.patch(`games/${id}`, {player1, player2}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}

export const enterPlayer2 =(id, player2)=>{
   return axiosInstance
.patch(`games/${id}`, {player2, randomPlayerJoin: false}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)

}

export const pauseOrPlay =(id, active) =>{
   return axiosInstance
.patch(`games/${id}`, {active}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}

export const isMultiPlayer = (id, randomPlayerJoin) =>{
  return axiosInstance
.patch(`games/${id}`, {randomPlayerJoin}).then(({data: {game}})=>{
  return game;
}).catch((err)=>err)
}
export const getLiveGames =()=>{
   return axiosInstance
  .get('games?live=true').then(({data: {games}})=>{
  return games;
}).catch((err)=>err)
}