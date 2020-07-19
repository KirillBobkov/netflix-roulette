import React from 'react';
import './App.scss';
import { MainPage } from '../../pages/MainPage';
import { ErrorBoundary } from '../ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const App = () => (
  <ErrorBoundary>
    <Router history={history}>
       <MainPage />
    </Router>
    {/* <MoviePage /> prepared for task 5 */}
  </ErrorBoundary>
);