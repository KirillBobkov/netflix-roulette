import React from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MoviesList } from '../../components/Movies';
import Sorting from '../../components/Sorting';
import { Toolbar } from '../../components/Toolbar';
import { Footer } from '../../components/Footer';
import Loadable from 'react-loadable';

const SortingLoadable = Loadable({
  loader: () => import('../../components/Sorting'),
  loading: () => (<div>Loading...</div>),
  modules: ['../../components/Sorting'],
  webpack: () => [require.resolveWeak('../../components/Sorting')],
});

export const SearchPage = () => (
  <>
    <Header>
      <Toolbar />
    </Header>
    <Main>
      <SortingLoadable />
      <MoviesList />
    </Main>
    <Footer />
  </>
);



