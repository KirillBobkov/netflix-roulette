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
})