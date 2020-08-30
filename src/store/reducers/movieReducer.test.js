import React from 'react';
import { movieReducer } from './movieReducer';
import { movies } from '../../mocks/testData';

describe('movie reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = [];
  });

  it('should return initial state', () => {
    const action = {
      type: 'FETCH_MOVIES',
      payload: {
        sortBy: 'release_date',
        sortOrder: 'asc',
        searchBy: 'genres',
        search: '',
      }
    };

    const expectedResult = [];

    const result = movieReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

  it('should return list of movies', () => {
    const action = {
      type: 'SET_MOVIES',
      payload: movies.list
    };

    const expectedResult = movies.list;

    const result = movieReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

  it('should return initial state', () => {
    const action = {
      type: 'CLEAR_MOVIES',
      payload: {}
    };

    const expectedResult = initialState;

    const result = movieReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

});
