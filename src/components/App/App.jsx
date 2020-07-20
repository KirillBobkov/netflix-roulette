import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { MainPage, MoviePage, SearchPage, NotFound } from '../../pages';
import { ErrorBoundary } from '../ErrorBoundary';
import { Switch, Route } from "react-router-dom";

export const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path='/movies' component={MainPage} />
      <Route path='/film/:id' render={route => <MoviePage movieId={route.match.params.id} />} />
      <Route path='/search/:query' render={route => <SearchPage search={route.match.params.query} />} />
      <Route component={NotFound} />
    </Switch>
  </ErrorBoundary>
  );

