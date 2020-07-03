import React from 'react';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';

describe('Header component', () => {
    let componentShallowed,
        componentMounted;

    beforeAll(() => {
        componentShallowed = shallow(<Header /> );
        componentMounted = mount(<Header /> );
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should render title of Header', () => {
        const footer = componentMounted.find('.header__title');
        expect(footer.text()).toEqual('netflixroulette');
    });
});