import React from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MoviesList } from '../../components/Movies';
import Sorting from '../../components/Sorting';
import { Toolbar } from '../../components/Toolbar';
import { Footer } from '../../components/Footer';

export default function Searchpage() {
  return (
    <>
      <Header>
        <Toolbar />
      </Header>
      <Main>
        <Sorting />
        <MoviesList />
      </Main>
      <Footer />
    </>);
};



