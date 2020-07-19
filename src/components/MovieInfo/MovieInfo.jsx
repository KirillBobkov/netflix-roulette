import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';
import { connect } from 'react-redux';
import { getYear } from '../../utils';

const MovieInfo = (props) => {
  const { movie } = props;
  // const year = getYear(movie.release_date);

  return (
    <div className='header__movie'>
      <p className='header__movie-poster'>
        <img src={movie.poster_path}  width='260'
          height='365'  alt=""/>
      </p>
      <p className='header__movie-info'>
  <h1 className='header__movie-title'>{movie.title}</h1>
          <span className='header__movie-rating'>{movie.vote_average}</span>
          <p className='header__movie-nomination'>{movie.tagline}</p>
          <p className='header__movie-details'>
            <span className='header__movie-year'>
              &nbsp;
            </span>
            year &nbsp;&emsp;
            <span className='header__movie-length'>
              {movie.runtime} &nbsp;
            </span>
            min
          </p>
          <p className='header__movie-description'>
            {movie.overview}
          </p>
      </p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    movie: state.list.filter(item => item.id.toString() === ownProps.match.params.id)[0]
  };
};

export default connect(mapStateToProps, null)(MovieInfo);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string
  })
};