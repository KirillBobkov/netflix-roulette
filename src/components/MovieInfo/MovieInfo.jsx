/* eslint-disable react/jsx-indent */
// @flow

import React from 'react';
import { getYear, getImage } from '../../utils';
import {
  HeaderMovieWrapper,
  HeaderMoviePoster,
  HeaderMovieTitle,
  HeaderMovieNomination,
  HeaderMovieInfo,
  HeaderMovieRating,
  HeaderMovieYear,
  HeaderMovieLength,
  HeaderMovieDetails,
  HeaderMovieDescription
} from './MovieInfo.styles';

type MovieInfoProps = {
  movie: {
    poster_path: string,
    title: number,
    tagline: string,
    runtime: number,
    vote_average: number,
    overview: string,
    release_date: string
  }
}

export const MovieInfo = ({ movie }: MovieInfoProps) => {
  const [movieUrl, setMovieUrl] = React.useState('https://via.placeholder.com/260x365/000000?text=Image+has+not+found');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getImage(movie.poster_path)
      .then((url) => setMovieUrl(url))
      .catch(() => setMovieUrl('https://via.placeholder.com/260x365/000000?text=Image+has+not+found'));
  }, []);

  const year = getYear(movie.release_date);

  return (
    <HeaderMovieWrapper>
      <HeaderMoviePoster>
        <img
          src={movieUrl}
          width='260'
          height='365'
          alt={movie.title}
        />
      </HeaderMoviePoster>
      <HeaderMovieInfo>
        <HeaderMovieTitle>{movie.title}
          <HeaderMovieRating>{movie.vote_average}</HeaderMovieRating>
        </HeaderMovieTitle>

        <HeaderMovieNomination>{movie.tagline}</HeaderMovieNomination>
        <HeaderMovieDetails>
          {year
            ? <span>
              <HeaderMovieYear>{year}&nbsp;</HeaderMovieYear>year &emsp;
              </span>
            : null}

          {movie.runtime
            ? <span>
              <HeaderMovieLength>{movie.runtime}&nbsp;</HeaderMovieLength>min
              </span>
            : null}
        </HeaderMovieDetails>
        <HeaderMovieDescription>
          {movie.overview}
        </HeaderMovieDescription>
      </HeaderMovieInfo>
    </HeaderMovieWrapper>
  );
};
