import React from 'react';
import './App.scss';
import { MainPage } from '../../pages/MainPage';
import { ErrorBoundary } from '../ErrorBoundary';


export const App = () => (
  <ErrorBoundary>
    <MainPage />

    {/* <MoviePage /> prepared for task 5 */}
  </ErrorBoundary>
);
