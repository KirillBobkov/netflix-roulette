import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}> 
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
