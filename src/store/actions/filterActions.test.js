import React from 'react';
import * as filterActions from './filterActions';

describe('filter actions', () => {
  it('should create an action to set movies', () => {
    const value = 'title';
    const expectedAction = {
      type: 'SET_SEARCH_BY',
      payload: 'title',
    };

    expect(filterActions.setSearchBy(value)).toEqual(expectedAction);
  });

  it('should create an action to set new filter', () => {
    const expectedAction = {
      type: 'SET_NEW_FILTER',
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

    expect(filterActions.setNewFilter(value)).toEqual(expectedAction);
  });

  it('should create an action to clear filter', () => {
    const expectedAction = {
      type: 'CLEAR_FILTER',
      payload: {}
    };

    expect(filterActions.clearFilter()).toEqual(expectedAction);
  });
});
