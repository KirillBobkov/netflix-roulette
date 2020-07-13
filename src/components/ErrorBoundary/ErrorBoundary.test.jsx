import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { shallow, mount } from 'enzyme';

describe('Error Boundary component', () => {
    let componentShallowed, 
        componentMounted;

    beforeAll(() => {
        componentShallowed = shallow(<ErrorBoundary /> );
        componentMounted = mount(<ErrorBoundary /> );
    });
    
    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should check that ErrorBoundary not render message without error', () => {
        const errorElement = componentMounted.find('.error');
        expect(componentMounted.contains(errorElement)).toEqual(false);
    });

    it('should check value "hasError" of ErrorBounary state', () => {
        expect(componentMounted.state('hasError')).toEqual(false);
    });
});