import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './components/App';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { history } from './utils/history';
import { BrowserRouter } from "react-router-dom";


{/* <BrowserRouter history={history}> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter> */}

hydrate(
  <div>privet</div>,
  document.getElementById('root'));
