import React from 'react';
import { Footer } from './Footer';
import { shallow, mount } from 'enzyme';

describe('Movie component', () => {
    let componentShallowed,
        componentMounted;

    beforeAll(() => {
        componentShallowed = shallow(<Footer /> );
        componentMounted = mount(<Footer /> );
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should render title of Footer', () => {
        const footer = componentMounted.find('.footer__title');
        expect(footer.text()).toEqual('netflixroulette');
    });
});