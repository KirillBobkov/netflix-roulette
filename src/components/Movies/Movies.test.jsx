import React from 'react';
import { MoviesItems, MoviesList, MoviesDataWrapper, MoviesListContainer } from './Movies';
import { mount } from 'enzyme';
import { getMovies } from '../../utils';
import { Provider } from 'react-redux';
import { movies } from '../../utils/testData';
import configureStore from 'redux-mock-store';

describe('Movies component', () => {
    const initialState = movies;
    const mockStore = configureStore();
    const mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
    let store, 
        wrapperMoviesListContainer, 
        wrapperMoviesDataWrapper, 
        wrapperMoviesItems;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      wrapperMoviesListContainer = mountWithStore(<MoviesListContainer />);
      wrapperMoviesDataWrapper = mountWithStore(<MoviesDataWrapper render={MoviesList} />);
      wrapperMoviesItems =  mountWithStore(<MoviesItems list={movies.list} />);
    });
    
    it('should be render MoviesDataWrapper correctly', () => {
        expect(wrapperMoviesDataWrapper).toMatchSnapshot();
    }); 

    it('should be render MoviesListContainer correctly', () => {
        expect(wrapperMoviesListContainer).toMatchSnapshot();
    }); 

    it('should be render movies correctly', () => {
        expect(wrapperMoviesItems).toMatchSnapshot();
    }); 
});   

describe('getMovie fetch service', () => {
    it('should check that method getMovies() return promise', () => {
        expect(movies.list.length).toBeGreaterThan(1);
    }); 
}); 



