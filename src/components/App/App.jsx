import React from 'react';
import './App.scss';
import { MainPage, MoviePage, SearchPage } from '../../pages';
import { ErrorBoundary } from '../ErrorBoundary';
import { Switch, Route } from "react-router-dom";
import { Spinner } from '../Spinner';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

const NotFoundLoadable = Loadable({
  loader: () => import('../../pages/NotFound'),
  loading: () => (<div>Loading...</div>),
  modules: ['../../pages/NotFound'],
  webpack: () => [require.resolveWeak('../../pages/NotFound')],
});

const App = ({ Router, location, context, store }: Props) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/movies' component={MainPage} />
          <Route path='/film/:id' component={MoviePage} />
          <Route path='/search/:query' component={SearchPage} />
          <Route component={NotFoundLoadable} />
        </Switch>
   
        <Spinner />
      </ErrorBoundary>
    </Router>
  </Provider>
  
  );

  export default hot(module)(App);