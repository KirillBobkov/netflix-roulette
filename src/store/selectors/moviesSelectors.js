import { createSelector } from 'reselect';

const getMoviesList = list => list;

export const getTotalMoviesLength = createSelector(
  getMoviesList,
  list => list.length
);
