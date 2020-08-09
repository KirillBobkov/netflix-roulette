/* eslint-disable react/prop-types */
import React from 'react';
import './App.scss';
import { MainPage, MoviePage, NotFound } from '../../pages';
import { ErrorBoundary } from '../ErrorBoundary';
import { Switch, Route } from "react-router-dom";
import { Spinner } from '../Spinner';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

const SearchPageLoadable = Loadable({
  loader: () => import('../../pages/SearchPage'),
  loading: () => (<div>Loading...</div>),
  modules: ['../../pages/SearchPage'],
  webpack: () => [require.resolveWeak('../../pages/SearchPage')],
});

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/movies' component={MainPage} />
          <Route path='/film/:id' component={MoviePage} />
          <Route path='/search/:query' component={SearchPageLoadable} />
          <Route component={NotFound} />
        </Switch>
   
        <Spinner />
      </ErrorBoundary>
    </Router>
  </Provider>
  
  );

  export default hot(module)(App);