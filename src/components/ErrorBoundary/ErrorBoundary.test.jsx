import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { shallow, mount } from 'enzyme';

describe('Error Boundary component', () => {
    
    it('should be render correctly', () => {
        const component = shallow(<ErrorBoundary />);

        expect(component).toMatchSnapshot();
    });

    it('ErrorBoundary not render message without error', () => {
        const component = mount(<ErrorBoundary />);
        const errorElement = component.find('.error');

        expect(component.contains(errorElement)).toEqual(false);
    });

    it('check value "hasError" of ErrorBounary state', () => {
        const component = mount(<ErrorBoundary />);

        expect(component.state('hasError')).toEqual(false);
    });
});