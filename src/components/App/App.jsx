import React from 'react';
import './App.scss';
import { Header } from '../Header';
import { Main } from '../Main';
import { Toolbar } from '../Toolbar';
import { Sorting } from '../Sorting';
import { Movies } from '../Movies';
import { Footer } from '../Footer';
import { MainPage } from '../../pages/MainPage';
import { ErrorBoundary } from '../ErrorBoundary';

export const App = () => (
  <ErrorBoundary>
    <MainPage>
      <Header>
        <Toolbar />
      </Header>
      <Main>
        <Sorting />
        <Movies />
      </Main>
      <Footer />
    </MainPage>

    {/* <MoviePage /> prepared for task 5 */}
  </ErrorBoundary>
);
