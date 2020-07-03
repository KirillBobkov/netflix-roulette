import React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fillStore } from '../../store';
import { getMovies } from '../../utils';

//Get data from server
class MoviesData extends React.Component {
    componentDidMount() { 
      getMovies()
          .then(data => {
            const movies = data.data.data;
            const { fillStore } = this.props;
              fillStore(movies);
          })
          .catch(err => console.info('catch', err));
    }

    render() {
        const { movies, render } = this.props;
        return render({ movies });
    }
}

const mapStateToProps = state => ({ movies: state });
const mapDispatchToProps = { fillStore };
export const MoviesDataWrapper = connect(mapStateToProps, mapDispatchToProps)(MoviesData);

//Create a node list from movies array
export const MoviesItems = ({ movies }) => {
    return movies.map((movie) => <Movie key={movie.id} movie={movie} />);
};

//Render movies or return fallback message
export const MoviesList = ({ movies }) => {
    const hasMovies = Boolean(movies && Array.isArray(movies) && movies.length);

    return (
      <div className='movies'>
        <ul className='movies__container'>
          {hasMovies
              ? <MoviesItems movies={movies} />
              : null}
        </ul>
      </div>
    );
};

export const MoviesListContainer = () => {
  return  (<MoviesDataWrapper render={MoviesList} />);
};

MoviesList.defaultProps = {
  movies: null
};

MoviesList.propTypes = {
  movies: PropTypes.array
};

MoviesData.propTypes = {
  render: PropTypes.func,
  fillStore: PropTypes.func,
  movies: PropTypes.array
};

