import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_ERROR = "FETCHING_ERROR";


export const getData = (input) => (dispatch) => {
    dispatch({type: FETCHING_DATA_START})
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v2/PublicHolidays/2017/${input}`)
    .then((res) => {
        dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data})
        console.log(res)
    })
    .catch(err => console.log(err))
  
};