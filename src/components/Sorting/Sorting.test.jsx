import React from 'react';
import Sorting from './Sorting';
import { getMovies } from '../../utils';
import { Provider } from 'react-redux';
import { movies } from '../../utils/testData';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';


describe('Sorting component', () => {
    const initialState = movies;
    const mockStore = configureStore();
    const mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
    let store, 
        wrapperSorting;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      wrapperSorting = mountWithStore(<Sorting />);
    });
    
    it('should be render correctly', () => {
        expect(wrapperSorting).toMatchSnapshot();
    });

    it('should render title of Sorting', () => {
        expect(wrapperSorting.exists('.button')).toEqual(true);
    }); 

    it('should render sorting description', () => {
        const sortDescription = wrapperSorting.find('.sorting__sort-description');
        expect(sortDescription.text()).toEqual('Sort by');
    });
});    



