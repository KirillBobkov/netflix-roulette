/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';
import { getYear, getImage } from '../../utils';

export class MovieInfo extends React.PureComponent {
  state = { source: 'https://via.placeholder.com/260x365/000000?text=Image+has+not+found' }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { movie: { poster_path } } = this.props;
    getImage(poster_path)
      .then((url) => this.setState({ source: url }))
      .catch((error) => this.setState({ source:'https://via.placeholder.com/260x365/000000?text=Image+has+not+found'}));
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
    const { movie: { poster_path } } = this.props;
    getImage(poster_path)
      .then((url) => this.setState({ source: url }))
      .catch((error) => this.setState({ source:'https://via.placeholder.com/260x365/000000?text=Image+has+not+found'}));
  }

  render() {
    const { movie } = this.props;
    const year = getYear(movie.release_date);

    return (
      <div className='header__movie'>
        <p className='header__movie-poster'>
          <img 
            src={this.state.source} 
            width='260'
            height='365' 
            alt={movie.title}
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
  }
};

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