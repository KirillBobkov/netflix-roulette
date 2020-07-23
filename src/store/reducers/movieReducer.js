import { SET_MOVIES } from '../actions/movieActions';
  
  let initialState = [];
  
  export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MOVIES: { 
       
        const newState = [...action.payload];
        return newState;
      }
  
      default: 
        return state;
    }
  };
  