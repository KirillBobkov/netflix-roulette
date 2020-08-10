// @flow
import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import { getYear, getImage } from '../../utils';

type MovieProps = {
 movie: {
    poster_path: string,
    title: string,
    genres: Array<string>,
    release_date: string,
    id: number
  }
}

type MovieState = {
  source: string
}

export class Movie extends React.Component<MovieProps, MovieState> {
  state = { source: 'https://via.placeholder.com/260x365/000000?text=Image+has+not+loaded' }

  componentDidMount() {
    getImage(this.props.movie.poster_path)
      .then((url) => this.setState({ source: url }))
      .catch(() => this.setState({ source: 'https://via.placeholder.com/260x365/000000?text=Image+has+not+found' }));
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
