import React from 'react';
import SearchArea from './SearchAreaContainer';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchArea component', () => {
    const initialState = {
        filter: {
            sortBy: 'release_date',
            sortOrder: 'asc',
            searchBy: 'title',
            search: '',
        }
    };

    const mockStore = configureStore();
    const mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
    let store, 
    wrapperSearchArea;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      wrapperSearchArea = mountWithStore(<Router><SearchArea /></Router>);
    });

    it('should be render correctly', () => {
        expect(wrapperSearchArea).toMatchSnapshot();
    });
});