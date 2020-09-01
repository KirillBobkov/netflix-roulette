import React from 'react';
import { MoviesItems, MoviesList } from './Movies';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { movies } from '../../mocks/testData';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Movies component', () => {
    const initialState = movies;
    const mockStore = configureStore();
    const mountWithStore = component => mount(<Provider store={store}> {component} </Provider>);
    let store, 
        wrapperMoviesList, 
        wrapperMoviesItems;
    
    beforeAll(()=>{
      store = mockStore(initialState);
      wrapperMoviesList = mountWithStore(<Router><MoviesList list={movies.list} /></Router>);
      wrapperMoviesItems =  mountWithStore(<Router><MoviesItems list={movies.list} /></Router>);
    });

    it('should be render MoviesList correctly', () => {
        expect(wrapperMoviesList).toMatchSnapshot();
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



