// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { getYear, getImage } from '../../utils';
import {
  MovieItem,
  MoviePoster,
  MovieTitle,
  MovieDescription,
  MovieGenre,
  MovieYear,
} from './Movie.styles';

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
      <MovieItem>
        <Link to={`/film/${movie.id}`}>
          <MoviePoster>
            <img
              src={this.state.source}
              width='260'
              height='365'
              alt={movie.title}
            />
          </MoviePoster>

          <MovieDescription>
            <MovieTitle>
              {movie.title}
            </MovieTitle>

            <MovieGenre>
              {movie.genres.length && movie.genres.join(', ')}
            </MovieGenre>

            <MovieYear>
              {getYear(movie.release_date)}
            </MovieYear>
          </MovieDescription>
        </Link>
      </MovieItem>
    );
  }
}
