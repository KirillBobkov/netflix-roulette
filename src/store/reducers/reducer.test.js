import React from 'react';
import reducer from './reducer';
import { movies } from '../utils/testData';

import {
    FILL_STORE,
} from './actions';

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
});