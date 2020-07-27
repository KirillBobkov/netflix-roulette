import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { MainPage, MoviePage, SearchPage, NotFound } from '../../pages';
import { ErrorBoundary } from '../ErrorBoundary';
import { Switch, Route } from "react-router-dom";
import { Spinner } from '../Spinner';

export const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path='/movies' component={MainPage} />
      <Route path='/film/:id' component={MoviePage} />
      <Route path='/search/:query' component={SearchPage} />
      <Route component={NotFound} />
    </Switch>
   
    <Spinner />
  </ErrorBoundary>
  );
