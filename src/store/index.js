import reducer from './reducer';
export * from './actions';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));


