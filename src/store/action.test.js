import React from 'react';

import {
  FILL_STORE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  RESET_ALL_PARAMETERS
} from './actions';

import { fillStore, 
  sortByDate,
  sortByRating,
  searchMoviesByTitle,
  searchMoviesByGenre,
  resetAllParameters
} from '../store';

import { getMovies } from '../utils';
import { movies } from '../utils/testData';

describe('actions', () => {

  it('should create an action to fill the store', () => {
    expect.assertions(1);
    expect(fillStore(movies).payload.list.length).toBeGreaterThan(5);
  });
});