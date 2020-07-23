import { SET_LOADING } from '../actions/spinnerActions';

const initialState = false;

export const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return !state;
    }

    default: 
      return state;
  }
};
