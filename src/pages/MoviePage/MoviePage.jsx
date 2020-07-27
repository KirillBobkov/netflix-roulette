import React from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MoviesListContainer } from '../../components/Movies';
import { Footer } from '../../components/Footer';
import { Sorting } from '../../components/Sorting';
import { MovieInfo } from '../../components/MovieInfo';

export const MoviePage = (props) => (
  <>
    <Header>
      <MovieInfo />
    </Header>
    <Main>
      <Sorting />
      <MoviesListContainer />
    </Main>
    <Footer />
  </>
);



