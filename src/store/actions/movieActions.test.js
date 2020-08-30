import React from 'react';
import * as movieActions from './movieActions';
import { movies } from '../../mocks/testData';

describe('movie actions', () => {
  it('should create an action to fetch movies', () => {
    const expectedAction = {
      type: 'FETCH_MOVIES', 
      payload: {
        sortBy: 'release_date',
        sortOrder: 'asc',
        searchBy: 'title',
        search: '',
      }
    };

    const value = {
      sortBy: 'release_date',
      sortOrder: 'asc',
      searchBy: 'title',
      search: '',
    };

    expect(movieActions.fetchMovies(value)).toEqual(expectedAction);
  });

  it('should create an action to set movies', () => {
    const expectedAction = {
      type: 'SET_MOVIES', 
      payload: movies.list
    };

    expect(movieActions.setMovies(movies.list)).toEqual(expectedAction);
  });

  it('should create an action to clear movies', () => {
    const expectedAction = {
      type: 'CLEAR_MOVIES', 
      payload: {}
    };

    expect(movieActions.clearMovies()).toEqual(expectedAction);
  });
});
