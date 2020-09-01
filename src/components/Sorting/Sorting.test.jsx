import React from 'react';
import Sorting from './SortingContainer';
import { Provider } from 'react-redux';
import { movies } from '../../mocks/testData';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Sorting component', () => {
    const initialState = {
        filter: {
            sortBy: 'release_date',
            sortOrder: 'asc',
            searchBy: 'title',
            search: '',
        },
        list: movies
    };

    const mockStore = configureStore();
    const mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
    let store, 
        wrapperSorting;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      wrapperSorting = mountWithStore(<Router><Sorting /></Router>);
    });
    
    it('should be render correctly', () => {
        expect(wrapperSorting).toMatchSnapshot();
    });
});    



