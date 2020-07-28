import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

  return store;
};




