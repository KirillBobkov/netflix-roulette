import { SET_MOVIES, CLEAR_MOVIES, FETCH_MOVIES } from '../actions/movieActions';

const initialState = [];

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return state;

    case SET_MOVIES: {
      return [...action.payload];
    }

    case CLEAR_MOVIES: {
      return initialState;
    }

    default:
      return state;
  }
};
