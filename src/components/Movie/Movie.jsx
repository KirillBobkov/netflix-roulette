import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';
import { getYear } from '../../utils';

export const Movie = ({ movie }) => (
  <li className='movies__item'>
    <p className='movies__poster'>
      <img 
        src={movie.poster_path} 
        width='260'
        height='365' 
        alt={movie.title}
      />
    </p>

    <p className='movies__description'>
      <span className='movies__title'>
        {movie.title}
      </span>

      <span className='movies__gengre'>
        {movie.genres.length && movie.genres.join(', ')}
      </span>

      <span className='movies__year'>
        {getYear(movie.release_date)}
      </span>
    </p>
  </li>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string
  })
};