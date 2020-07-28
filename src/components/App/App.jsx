/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { MainPage, MoviePage, SearchPage, NotFound } from '../../pages';
import { ErrorBoundary } from '../ErrorBoundary';
import { Switch, Route } from "react-router-dom";
// import { Spinner } from '../Spinner';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';


const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/movies' component={MainPage} />
          <Route path='/film/:id' component={MoviePage} />
          <Route path='/search/:query' component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
   
        {/* <Spinner /> */}
      </ErrorBoundary>
    </Router>
  </Provider>
  
  );

  export default hot(module)(App);