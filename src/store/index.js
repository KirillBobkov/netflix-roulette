import reducer from './reducer';
export * from './actions';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage
};

const pReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

export { persistor, store };




