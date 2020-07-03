import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { movies } from '../../utils/testData';


describe('App component', () => {
    const initialState = movies;
    const mockStore = configureStore();
    let store, container;
    
    beforeEach(()=>{
      store = mockStore(initialState);
      container = shallow(<App store={store} /> );
    });
  
    it('should be render correctly', () => {
      expect(container).toMatchSnapshot();
    });
});

