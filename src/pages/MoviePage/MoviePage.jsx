import React from 'react';
import Loadable from 'react-loadable';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MoviesList } from '../../components/Movies';
import { Footer } from '../../components/Footer';
import Sorting from '../../components/Sorting';

const MovieInfoLoadable = Loadable({
  loader: () => import('../../components/MovieInfo'),
  loading: () => (<div>Loading...</div>),
  modules: ['../../components/MovieInfo'],
  webpack: () => [require.resolveWeak('../../components/MovieInfo')],
});

export const MoviePage = () => (
  <>
    <Header>
      <MovieInfoLoadable />
    </Header>
    <Main>
      <Sorting />
      <MoviesList />
    </Main>
    <Footer />
  </>
);




