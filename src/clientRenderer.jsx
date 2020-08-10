import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { App } from './components/App';
import configureStore from './store/store';

const store = configureStore(window.PRELOADED_STATE);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <App
        Router={BrowserRouter}
        store={store}
      />,
      document.getElementById('root'),
    );
  });
};
