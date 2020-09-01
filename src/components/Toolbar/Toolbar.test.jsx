import React from 'react';
import { Provider } from 'react-redux';
import { movies } from '../../mocks/testData';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { Toolbar } from './Toolbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Toolbar component', () => {
    const initialState = {
        filter: {
            sortBy: 'release_date',
            sortOrder: 'asc',
            searchBy: 'title',
            search: '',
        }
    };

    const mockStore = configureStore();
    
    let store, 
    wrapperToolbar,
    mountWithStore;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
      wrapperToolbar = mountWithStore(<Router><Toolbar /></Router>);
    });
    
    it('should be render correctly', () => {
        expect(wrapperToolbar).toMatchSnapshot();
    });
});    



