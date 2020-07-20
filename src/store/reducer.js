import {
  SET_MOVIES,
  SET_SEARCH_BY,
  OPEN_SPINNER,
  CLOSE_SPINNER
} from './actions';

let initialState = {
    list: [],
    filter: {
      sortBy: "release_date",
      sortOrder: "asc",
      searchBy: "title",
      search: ''
    }
};

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

    case OPEN_SPINNER: {
      return { ...state, spinner: true};
    }

    case CLOSE_SPINNER: {
      return { ...state, spinner: false};
    }

    default: 
      return state;
  }
};
