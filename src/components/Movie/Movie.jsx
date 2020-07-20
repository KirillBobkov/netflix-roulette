import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';
import { getYear, getImage } from '../../utils';
import { BrowserRouter, Route, Router, Link, Switch, Redirect } from 'react-router-dom';

export class Movie extends React.Component {
  state = { source: 'https://via.placeholder.com/260x365/000000?text=Image+has+not+loaded' }

  componentDidMount() {
    getImage(this.props.movie.poster_path)
      .then((url) => this.setState({ source: url }))
      .catch((error) => console.log(error));
  }

  render() {
    const { movie } = this.props;

    return (
      <li className='movies__item'>
        <Link to={`/film/${movie.id}`}>
          <p className='movies__poster'>
            <img 
              src={this.state.source} 
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
        </Link>
      </li>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    id: PropTypes.number
  })
};