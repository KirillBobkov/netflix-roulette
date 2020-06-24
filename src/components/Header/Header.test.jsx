import React from 'react';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';

describe('Header component', () => {

    it('should be render correctly', () => {
        const component = shallow(<Header />);

        expect(component).toMatchSnapshot();
    });

    it('renders title of Header', () => {
        const component = mount(<Header />);
        const footer = component.find('.header__title');

        expect(footer.text()).toEqual('netflixroulette');
    });
});