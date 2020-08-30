import React from 'react';
import { spinnerReducer } from './spinnerReducer';

describe('spinner reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = false;
  });

  it('should return state with new spinner parameter', () => {
    const action = {
      type: 'SET_LOADING',
      payload: true
    };

    const expectedResult = true;

    const result = spinnerReducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

});
