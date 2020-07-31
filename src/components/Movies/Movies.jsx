import React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';

//Create a node list from movies array
export const MoviesItems = ({ list }) => {
    return list.map((movie) => <Movie key={movie.id} movie={movie} />);
};

//Render movies or return fallback message
export const MoviesList = ({ list }) => {
    const hasMovies = Boolean(list && Array.isArray(list) && list.length);

    return (
      <div className='movies'>
        <ul className='movies__container'>
          {hasMovies
              ? <MoviesItems list={list} />
              : <li className='movies__error'>No movies found!</li>}
        </ul>
      </div>
    );
};

MoviesList.defaultProps = {
  movies: null
};

MoviesList.propTypes = {
  list: PropTypes.array
};

