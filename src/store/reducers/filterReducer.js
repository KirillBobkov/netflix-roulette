import { SET_SEARCH_BY, SET_NEW_FILTER, CLEAR_FILTER } from '../actions/filterActions';

const initialState = {
  sortBy: 'release_date',
  sortOrder: 'asc',
  searchBy: 'title',
  search: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_BY: {
      const { sortBy, sortOrder, search } = state;

      const newFilter = {
        sortBy,
        searchBy: action.payload,
        search,
        sortOrder,
      };

      return { ...state, ...newFilter };
    }

    case SET_NEW_FILTER: {
      const newFilter = { ...action.payload };
      return { ...state, ...newFilter };
    }

    case CLEAR_FILTER: {
      return initialState;
    }

    default:
      return state;
  }
};
