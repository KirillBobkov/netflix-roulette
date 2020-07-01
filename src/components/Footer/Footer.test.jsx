import React from 'react';
import { Footer } from './Footer';
import { shallow, mount } from 'enzyme';

describe('Movie component', () => {

    it('should be render correctly', () => {
        const component = shallow(<Footer />);

        expect(component).toMatchSnapshot();
    });

    it('should render title of Footer', () => {
        const component = mount(<Footer />);
        const footer = component.find('.footer__title');

        expect(footer.text()).toEqual('netflixroulette');
    });
});