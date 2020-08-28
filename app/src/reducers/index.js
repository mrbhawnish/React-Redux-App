import { 
    FETCHING_GAME_START, 
    FETCHING_GAME_SUCCESS, 
    FETCHING_GAME_ERROR
} from "../actions/index.js";


export const initialState = {
    game: [],
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
   switch (action.type){

    case FETCHING_GAME_START:
        console.log("state: fetching started")

        return {...state, 
            isFetching: true
        }
    case FETCHING_GAME_SUCCESS:
        return {
            ...state, 
            game: action.payload,
            isFetching: false
        }

     default: 
        return state;

   }
}