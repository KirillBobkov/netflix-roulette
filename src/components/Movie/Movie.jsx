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

export const Movie = ({ movie }: MovieProps) => {
  const [movieUrl, setMovieUrl] = React.useState('https://via.placeholder.com/260x365/000000?text=Image+has+not+found');

  React.useEffect(() => {
    getImage(movie.poster_path)
    .then((url) => setMovieUrl(url))
    .catch(() => setMovieUrl('https://via.placeholder.com/260x365/000000?text=Image+has+not+found'));
  }, []);

  return (
    <MovieItem>
      <Link to={`/film/${movie.id}`}>
        <MoviePoster>
          <img
            src={movieUrl}
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
};
