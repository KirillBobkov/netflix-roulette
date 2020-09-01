import React from 'react';
import { Main } from './Main';
import { shallow, mount } from 'enzyme';

describe('Main component', () => {
    let componentShallowed,
        componentMounted;
    
    beforeAll(() => {
        componentShallowed = shallow(<Main /> );
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });
});