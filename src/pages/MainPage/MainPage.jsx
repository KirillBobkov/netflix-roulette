import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Toolbar } from '../../components/Toolbar';
import { Sorting } from '../../components/Sorting';
import { MoviesListContainer } from '../../components/Movies';
import { Footer } from '../../components/Footer';

export const MainPage = () => (
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