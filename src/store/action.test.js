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
import { movies } from '../utils/testData'

describe('actions', () => {

  it('should create an action to add a category', async () => {
    expect.assertions(1);
    const data  = await getMovies();
    const movies = data.data.data;
    expect(fillStore(movies).payload.length).toBeGreaterThan(5);
  });

  it('should create an action to sort movies by date', () => {
    const expectedAction = {
      type: SORT_BY_DATE
    };
    expect(sortByDate()).toEqual(expectedAction);
  });
  
  it('should create an action to sort movies by rating', () => {
    const expectedAction = {
      type: SORT_BY_RATING
    };
    expect(sortByRating()).toEqual(expectedAction);
  });

  it('should create an action to search movies by title', () => {
    const expectedAction = {
      type: SEARCH_MOVIES_BY_TITLE,
      payload: 'Gemini'
    };
    expect(searchMoviesByTitle('Gemini')).toEqual(expectedAction);
  });

  it('should create an action to search movies by genre', () => {
    const expectedAction = {
      type: SEARCH_MOVIES_BY_GENRE,
      payload: 'Crime'
    };
    expect(searchMoviesByGenre('Crime')).toEqual(expectedAction);
  });

  it('should create an action to reset all parameters', () => {
    const expectedAction = {
      type: RESET_ALL_PARAMETERS
    };
    expect(resetAllParameters()).toEqual(expectedAction);
  });
  
});