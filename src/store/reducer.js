import {
  FILL_STORE,
} from './actions';

const initialState =  [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FILL_STORE: {
      return [...action.payload];
    }
    
    default:
      return state;
  }
};
