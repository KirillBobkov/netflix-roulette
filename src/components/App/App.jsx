//@flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Spinner } from '../Spinner';
import { ErrorBoundary } from '../ErrorBoundary';
import { MainPage, MoviePage, SearchPage } from '../../pages';
import '../../assets/styles/globalStyles.scss';

type AppProps = {
  Router: any,
  location: any,
  context: any,
  store: any
}

const NotFoundLoadable = Loadable({
  loader: () => import('../../pages/NotFound'),
  loading: () => (<div>Loading...</div>),
  modules: ['../../pages/NotFound'],
  webpack: () => [require.resolveWeak('../../pages/NotFound')],
});

const App = ({
  Router, location, context, store,
} : AppProps) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/film/:id' component={MoviePage} />
          <Route path='/search/:query' component={SearchPage} />
          <Route path='*' component={NotFoundLoadable} />
        </Switch>
        <Spinner />
      </ErrorBoundary>
    </Router>
  </Provider>

);

export default hot(module)(App);
