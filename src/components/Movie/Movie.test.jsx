import React from 'react';
import { Movie } from './Movie';
import { shallow, mount } from 'enzyme';

describe('Movie component', () => {
    let movie;
    let index;

    beforeAll(() => {
        movie = {
            name: 'Bohemian Rhapsody',
            gengre: 'Action & Adventure',
            year: 2003,
            id: 4689453234888769
        };
        index = 1;     
    });

    it('should be render correctly', () => {
        const component = shallow(<Movie key={movie.id} index={index} info={movie} />);
        expect(component).toMatchSnapshot();
    });

    it('should be render correctly with childs', () => {
        const component = mount(<Movie key={movie.id} index={index} info={movie} />);
        expect(component).toMatchSnapshot();
    });

    it('should render a year of movie', () => {
        const component = mount(<Movie key={movie.id} index={index} info={movie} />);
        const year = component.find('.movies__year');
        expect(year.text()).toEqual('2003');
    });

    it('should render a gengre of movie', () => {
        const component = mount(<Movie key={movie.id} index={index} info={movie} />);
        const year = component.find('.movies__gengre');
        expect(year.text()).toEqual('Action & Adventure');
    });

    it('should render a title of movie', () => {
        const component = mount(<Movie key={movie.id} index={index} info={movie} />);
        const year = component.find('.movies__title');
        expect(year.text()).toEqual('Bohemian Rhapsody');
    });
});