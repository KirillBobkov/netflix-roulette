import React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fillStore } from '../../store';
import {movies as moviesDTO} from '../../moviesData';

export const getMovies = () => Promise.resolve(moviesDTO);

//Get data from server
class MoviesData extends React.Component {
    componentDidMount() { 
      getMovies()
          .then(movies => {
              this.props.fillStore(movies)
          })
          .catch(err => console.info('catch', err));
    }

    render() {
        const { movies } = this.props;
        return this.props.render({ movies });
    }
}

const mapStateToProps = (state) => {
  return {
    movies: state
  };
};

const mapDispatchToProps = {
  fillStore
};

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(MoviesData);


//Create a node list from movies array
export const MoviesItems = ({ movies }) => {
    return movies.map(
        (movie, index) =>
          <Movie key={movie.id} index={index} info={movie} />
    );
};

//Render movies or return fallback message
export const MoviesList = ({ movies }) => {
    const hasMovies = Boolean(Array.isArray(movies) && movies.length);

    return (
      <div className='movies'>
        <ul className='movies__container'>
          {hasMovies
              ? <MoviesItems movies={movies} />
              : <div>No movies found</div>}
        </ul>
      </div>
    );
};

export const MoviesListContainer = () => {
  return  (<Wrapper render={MoviesList} />);
};


MoviesList.defaultProps = {
  movies: null
};

MoviesList.propTypes = {
  movies: PropTypes.array
};

MoviesData.propTypes = {
  render: PropTypes.func.isRequired
};



