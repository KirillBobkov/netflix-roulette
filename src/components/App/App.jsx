import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { MainPage, MoviePage } from '../../pages';
import { ErrorBoundary } from '../ErrorBoundary';
import { Switch, Route, Redirect } from "react-router-dom";
import { setMovies, fetchMovies } from '../../store';
import { connect } from 'react-redux';

 class App extends React.PureComponent {
    componentDidMount() { 
      const { setMovies } = this.props;
      fetchMovies({
        sortBy: "release_date",
        sortOrder: "asc",
        searchBy: "title"
      }, setMovies);
    }

  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route exact path='/movies' component={MainPage} />
          <Route path='/film/:id' render={route => <MoviePage movieId={route.match.params.id} />} />
          <Route path=''>
            <Redirect to='/movies' />
          </Route>
        </Switch>
      </ErrorBoundary>
    );
  } 
}

const mapDispatchToProps = { setMovies };
export default  connect(null, mapDispatchToProps)(App);

App.propTypes = {
  setMovies: PropTypes.func
};
