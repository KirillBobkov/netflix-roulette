import {
  FILL_STORE
} from './actions';

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FILL_STORE: {
      const newState = { ...action.payload };
      newState.list = Array.from(newState.list);
      return { ...newState };
    }

    default: 
      return state;
  }
};
