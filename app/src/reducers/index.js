import {FETCHING_DATA_START,
     FETCHING_DATA_SUCCESS,
      FETCHING_ERROR} from "../actions/index";
export const initialState = {
  holidays: [],
  isLoading: false,
  error: ""
};


export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
     case FETCHING_DATA_START:
     return {...state,
          isLoading: true
         }
         case FETCHING_DATA_SUCCESS:
             return {
            ...state, 
            isLoading: false,
            holidays: action.payload,
            error: ""
             }
             case FETCHING_ERROR:
                 return {
                     ...state,
                     isLoading: false,
                     error: action.payload
                 }
     default:
         return state;




    }


};