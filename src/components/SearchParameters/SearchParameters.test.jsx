import React from 'react';
import SearchParameters from './SearchParametersContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('SearchParameters component', () => {
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
        wrapperSearchParameters;

    beforeAll(()=>{
        store = mockStore(initialState);
        wrapperSearchParameters = mountWithStore(<SearchParameters />);
      });


    it('should be render correctly', () => {
        expect(wrapperSearchParameters).toMatchSnapshot();
    });
});