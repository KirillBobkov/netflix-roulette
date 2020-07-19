import React from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MoviesListWrapper } from '../../components/Movies';
import { Footer } from '../../components/Footer';
import { MovieInfo } from '../../components/MovieInfo';
import PropTypes from 'prop-types';

export const MoviePage = (props) => (
  <>
    <Header>
      <MovieInfo id={props.movieId} />
    </Header>
    <Main>
      <MoviesListWrapper />
    </Main>
    <Footer />
  </>
);

MoviePage.propTypes = {
  movieId: PropTypes.string,
};


