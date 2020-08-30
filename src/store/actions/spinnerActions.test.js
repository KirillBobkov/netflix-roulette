import React from 'react';
import * as spinnerActions from './spinnerActions';

describe('spinner actions', () => {
  it('should create an action to set loading', () => {
    const expectedAction = {
      type: 'SET_LOADING', 
      payload: true
    };

    const value = true;

    expect(spinnerActions.setLoading(value)).toEqual(expectedAction);
  });
});
