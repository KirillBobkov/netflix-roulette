import React from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Toolbar } from '../../components/Toolbar';
import { Sorting } from '../../components/Sorting';
import { MoviesListContainer } from '../../components/Movies';
import { Footer } from '../../components/Footer';
import { MovieInfo } from '../../components/MovieInfo';
import { Switch, Route, Redirect } from 'react-router-dom';

export const MainPage = () => (
  <>
      <Header>
        <Switch>
              <Route path='/film/:id' component={MovieInfo} />
              <Route path='/' component={Toolbar} />
              <Route path=''>
                <Redirect to='/' />
              </Route>
        </Switch>
      </Header>
    
      <Main>
        <Sorting />
        <MoviesListContainer />
      </Main>
      <Footer />
  </>
);