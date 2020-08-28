import axios from "axios";

export const FETCHING_GAME_START = "FETCHING_GAME_START";
export const FETCHING_GAME_SUCCESS = "FETCHING_GAME_SUCCESS";
export const FETCHING_GAME_ERROR = "FETCHING_GAME_ERROR";

export const getGames = () => dispatch => {
   dispatch({type: FETCHING_GAME_START})
   console.log("getGames action!");
   axios
   .get("https://www.balldontlie.io/api/v1/games?seasons[]=2018&seasons[]=2017&team_ids[]=1")
   .then((res) => {
       console.log(res.data.data)
       
        dispatch({type: FETCHING_GAME_SUCCESS, payload: res.data.data})

   }) 
   .catch(err => console.log(err))


}