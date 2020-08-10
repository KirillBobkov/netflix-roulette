import { SET_LOADING } from '../actions/spinnerActions';

const initialState = false;

export const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return action.payload;
    }

    default:
      return state;
  }
};
