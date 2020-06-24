import React from 'react';
import { Movies, getMovies, MoviesItems } from './Movies';
import { shallow, mount } from 'enzyme';

    
describe('getMovies fetch service', () => {
    it('method getMovies return promise', () => {
        expect.assertions(1);
        return getMovies().then(movies => {
            expect(movies.length).toBeGreaterThan(1);
        });
    }); 
});   

describe('MoviesItems component', () => {

    it('should be render movies correctly', () => {
        expect.assertions(1);

        return getMovies().then(movies => {
            const component = mount(<MoviesItems movies={movies} />); 
            expect(component).toMatchSnapshot();
        }); 
    }); 

}); 