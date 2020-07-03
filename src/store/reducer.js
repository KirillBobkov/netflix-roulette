import {
  FILL_STORE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  SEARCH_MOVIES,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  RESET_ALL_PARAMETERS
} from './actions';
import { movies } from '../utils/testData';

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FILL_STORE: {
      const newState = { ...action.payload };
      newState.list = Array.from(newState.list);
      initialState = { ...newState };
      return { ...newState };
    }

    case SORT_BY_DATE: {
      const newState = { ...state };
      newState.list = Array.from(newState.list);
      newState.list.sort((movieA, movieB) => {
        const movieADate = new Date(movieA.release_date);
        const movieBDate = new Date(movieB.release_date);
        return movieADate - movieBDate;
      });
      return newState;
    }

    case SORT_BY_RATING: {
      const newState = { ...state };
      newState.list = Array.from(newState.list);
      newState.list.sort((movieA, movieB) => movieA.vote_count - movieB.vote_count);
      return newState;
    }

    case SEARCH_MOVIES_BY_TITLE: {
      const newState = { ...state };
      newState.list = Array.from(newState.list);
      newState.list = newState.list.filter(item => item.title
        .toLowerCase()
        .includes(action.payload.toLowerCase()));
      return newState;
    }

    case SEARCH_MOVIES_BY_GENRE: {
      const newState = { ...state };
      newState.list = Array.from(newState.list);
      newState.list = newState.list.filter(item => item.genres
        .toString()
        .toLowerCase()
        .includes(action.payload.toLowerCase()));
      return newState;
    }

    case RESET_ALL_PARAMETERS: {
      return initialState;
    }
     
    default: 
      return state;
  }
};
