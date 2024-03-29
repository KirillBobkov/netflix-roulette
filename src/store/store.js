import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import { watchFetchMovies } from './actions/movieActions';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(watchFetchMovies);
  store.runSaga = () => sagaMiddleware.run(watchFetchMovies);
  store.close = () => store.dispatch(END);

  return store;
};
