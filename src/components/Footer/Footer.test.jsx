import React from 'react';
import { Footer } from './Footer';
import { shallow, mount } from 'enzyme';

describe('Movie component', () => {
    let componentShallowed;

    beforeAll(() => {
        componentShallowed = shallow(<Footer /> );
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });
});