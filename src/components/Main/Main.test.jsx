import React from 'react';
import { Main } from './Main';
import { shallow, mount } from 'enzyme';

describe('Main component', () => {

    it('should be render correctly', () => {
        const component = shallow(<Main />);

        expect(component).toMatchSnapshot();
    });

    it('Component contains class ".main"', () => {
        const component = mount(<Main />);

        expect(component.exists('.main')).toEqual(true);
    });
});