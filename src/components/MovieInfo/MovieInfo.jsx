import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';
import { connect } from 'react-redux';
import { getYear } from '../../utils';

const MovieInfo = (props) => {
  const { movie } = props;

  const year = getYear(movie.release_date);

  return (
    <div className='header__movie'>
      <p className='header__movie-poster'>
        <img
          src={movie.poster_path} width='260'
          height='365' alt={movie.title}
        />
      </p>
      <div className='header__movie-info'>
        <h1 className='header__movie-title'>{movie.title}
          <span className='header__movie-rating'>{movie.vote_average}</span>
        </h1>
       
        <p className='header__movie-nomination'>{movie.tagline}</p>
        <p className='header__movie-details'>
          {year 
            ? <span>
                <span className='header__movie-year'>{year}&nbsp;</span>year &emsp;
              </span>
            : null}
         
          {movie.runtime
            ? <span>
                <span className='header__movie-length'>{movie.runtime}&nbsp;</span>min
              </span>
            : null}
        </p>
        <p className='header__movie-description'>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.list);
  return {
    state,
    movie: state.list.filter(item => item.id === Number(ownProps.id))[0]
  };
};

export default connect(mapStateToProps, null)(MovieInfo);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string
  })
};