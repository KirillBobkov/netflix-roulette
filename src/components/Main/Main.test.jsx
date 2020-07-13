import React from 'react';
import { Main } from './Main';
import { shallow, mount } from 'enzyme';

describe('Main component', () => {
    let componentShallowed,
        componentMounted;
    
    beforeAll(() => {
        componentShallowed = shallow(<Main /> );
        componentMounted = mount(<Main /> );
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should check that Component contains class ".main"', () => {
        expect(componentMounted.exists('.main')).toEqual(true);
    });
});