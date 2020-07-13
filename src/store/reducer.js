import {
  SET_MOVIES,
  SET_SEARCH_BY
} from './actions';

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      const newState = { ...action.payload };
      newState.list = Array.from(newState.list);
      return newState;
    }

    case SET_SEARCH_BY: {
      const newFilter = {
        sortBy: state.filter.sortBy,
        searchBy: action.payload,
        search: state.filter.search,
        sortOrder: state.filter.sortOrder
      };

      return { ...state, filter: newFilter};
    }

    default: 
      return state;
  }
};
