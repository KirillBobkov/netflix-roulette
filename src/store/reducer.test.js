import React from 'react';
import reducer from './reducer';
import { movies } from '../utils/testData';

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

describe('reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = movies;
    });

    it('should return found movies by title', () => {
        const action = {
            type: FILL_STORE,
            payload: movies
        };
        const result = reducer(initialState, action);
        expect(result).toEqual(movies);
    });

    it('should return found movies by title', () => {
        const action = {
            type: SEARCH_MOVIES_BY_TITLE,
            payload: 'Wreck-It Ralph'
        };
        const result = reducer(initialState, action);
        expect(result.list.length).toBe(1);
    });

    it('should return found movies by genre', () => {
        const action = {
            type: SEARCH_MOVIES_BY_GENRE,
            payload: 'Animation'
        };
        const result = reducer(initialState, action);
        expect(result.list.length).toBe(2);
    });

    it('should return initial list of movies', () => {
        const action = {
            type: RESET_ALL_PARAMETERS
        };
        const result = reducer(initialState, action);
        expect(result).toEqual(movies);
    });

    it('should check that sorted by date state doesnt similar with initial', () => {
        const action = {
            type: SORT_BY_DATE
        };
        const result = reducer(initialState, action);
        expect(result).not.toBe(movies);
    });

    it('should check that sorted by rating state doesnt similar with initial ', () => {
        const action = {
            type: SORT_BY_RATING
        };
        const result = reducer(initialState, action);
        expect(result).not.toBe(movies);
    });
});