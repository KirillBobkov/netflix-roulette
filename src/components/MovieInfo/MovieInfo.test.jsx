import React from 'react';
import { Movie } from './Movie';
import { shallow, mount } from 'enzyme';

describe('Movie component', () => {
    let movie;
    let componentMovie;

    beforeAll(() => {
        movie = {
            id: 321612,
            title: "Beauty and the Beast",
            tagline: "Be our guest.",
            vote_average: 6.8,
            vote_count: 7861,
            release_date: "2017-03-16",
            poster_path: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
            overview: "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
            budget: 160000000,
            revenue: 1263521126,
            genres:[
               "Family",
               "Fantasy",
               "Romance"
            ],
            runtime: 129
         };    
         componentMovie = mount(<Movie key={movie.id} movie={movie} />);
    });

    it('should be render correctly', () => {
        expect(componentMovie).toMatchSnapshot();
    });

    it('should be render correctly with childs', () => {
        expect(componentMovie).toMatchSnapshot();
    });

    it('should render a year of movie', () => {
        const year = componentMovie.find('.movies__year');
        expect(year.text()).toEqual('2017');
    });

    it('should render a gengre of movie', () => {
        const genre = componentMovie.find('.movies__gengre');
        expect(genre.text()).toEqual('Family, Fantasy, Romance');
    });

    it('should render a title of movie', () => {
        const title = componentMovie.find('.movies__title');
        expect(title.text()).toEqual('Beauty and the Beast');
    });
});