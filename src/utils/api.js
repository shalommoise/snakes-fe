import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://snakes-be.herokuapp.com/api/",
});
export const postGame =(player1, player2, snake2)=>{
  return axiosInstance
  .post('games/', {player1, player2, snake2})
  .then(({data: {game}})=>{
    return game;
  }).catch((err)=>err)
}