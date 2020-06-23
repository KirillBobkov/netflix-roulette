import React from 'react';
import {movies as moviesDTO} from '../../moviesData';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';

const getMovies = () => Promise.resolve(moviesDTO);

//Get data from server
class MoviesData extends React.Component {
    state = { movies: [] }

    componentDidMount() {
      getMovies()
          .then(movies => {
              this.setState({movies});
          })
          .catch(err => console.info('catch', err));
    }

    render() {
        const { movies } = this.state;
        return this.props.render({ movies });
    }
}

MoviesData.propTypes = {
  render: PropTypes.func.isRequired
};

//Create a node list from movies array
const MoviesItems = ({ movies }) => {
    return movies.map(
        (movie, index) =>
          <Movie key={movie.id} index={index} info={movie} />
    );
};

//Render movies or return fallback message
const MoviesList = ({ movies }) => {
    const hasMovies = !Boolean(Array.isArray(movies) && movies.length);
 
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

MoviesList.defaultProps = {
  movies: null
};

MoviesList.propTypes = {
  movies: PropTypes.array
};

export const MoviesListContainer = () => {
   return  (<MoviesData render={MoviesList} />);
};
