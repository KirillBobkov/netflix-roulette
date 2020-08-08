import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from "react-router-dom";
import configureStore from './store/store';
import Loadable from 'react-loadable';

const store = configureStore(window.PRELOADED_STATE);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <App 
        Router={BrowserRouter} 
        store={store}
      />, 
      document.getElementById('root')
    );
  });
};


