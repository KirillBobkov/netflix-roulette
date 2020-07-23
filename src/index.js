import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { history } from './utils/history';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}> 
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
