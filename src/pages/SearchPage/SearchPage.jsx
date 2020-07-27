import React from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MoviesListContainer } from '../../components/Movies';
import { Sorting } from '../../components/Sorting';
import { Toolbar } from '../../components/Toolbar';
import { Footer } from '../../components/Footer';

export const SearchPage = () => (
  <>
    <Header>
      <Toolbar />
    </Header>
    <Main>
      <Sorting />
      <MoviesListContainer />
    </Main>
    <Footer />
  </>
);



