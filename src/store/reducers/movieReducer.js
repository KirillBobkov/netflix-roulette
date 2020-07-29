import { SET_MOVIES, CLEAR_MOVIES, FETCH_MOVIES } from '../actions/movieActions';
  
  let initialState = [];
  
  export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES:
      return { ...state };

      case SET_MOVIES: { 
        const newState = [...action.payload];
        return newState;
      }

      case CLEAR_MOVIES: { 
        return initialState;
      }
  
      default: 
        return state;
    }
  };
  