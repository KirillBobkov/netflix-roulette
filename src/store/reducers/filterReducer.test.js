import React from 'react';
import { filterReducer } from './filterReducer';

describe('filter reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      sortBy: 'release_date',
      sortOrder: 'asc',
      searchBy: 'title',
      search: '',
    };
  });

  it('should return filter with new searchBy parameter', () => {
    const action = {
      type: 'SET_SEARCH_BY',
      payload: 'genres',
    };

    const expectedResult = {
      sortBy: 'release_date',
      sortOrder: 'asc',
      searchBy: 'genres',
      search: '',
    };

    const result = filterReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

  it('should return new filter', () => {
    const action = {
      type: 'SET_NEW_FILTER',
      payload: {
        sortBy: 'release_date',
        sortOrder: 'asc',
        searchBy: 'genres',
        search: '',
      }
    };

    const expectedResult = {
      sortBy: 'release_date',
      sortOrder: 'asc',
      searchBy: 'genres',
      search: '',
    };

    const result = filterReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

  it('should clear filter and return initialState', () => {
    const action = {
      type: 'CLEAR_FILTER',
      payload: {}
    };

    const expectedResult = initialState;

    const result = filterReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

});
