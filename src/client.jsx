import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from "react-router-dom";
import configureStore from './store/store';

{/* <BrowserRouter history={history}> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter> */}

const store = configureStore(window.PRELOADED_STATE);

const root = ( 
  <App 
    Router={BrowserRouter} 
    store={store}
  /> 
  );

hydrate(root, document.getElementById('root'));
