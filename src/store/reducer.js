import {
  FILL_STORE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  SEARCH_MOVIES,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  RESET_ALL_PARAMETERS
} from './actions';

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FILL_STORE: {
      initialState = [...action.payload];
      return [...action.payload];
    }

    case SORT_BY_DATE: {
      return [...state.sort((movieA, movieB) => {
        const movieADate = new Date(movieA.release_date);
        const movieBDate = new Date(movieB.release_date);
        return movieADate - movieBDate;
      })];
    }

    case SORT_BY_RATING: {
      return [...state.sort((movieA, movieB) => movieA.vote_average - movieB.vote_average)];
    }

    case SEARCH_MOVIES_BY_TITLE: {
      const newState = [...state];
      return newState.filter(item => item.title
        .toLowerCase()
        .includes(action.payload.toLowerCase()));
    }

    case SEARCH_MOVIES_BY_GENRE: {
      const newState = [...state];
      return newState.filter(item => item.genres
        .toString()
        .toLowerCase()
        .includes(action.payload.toLowerCase()));
    }

    case RESET_ALL_PARAMETERS: {
      return initialState;
    }
     
    default: 
      return state;
  }
};
