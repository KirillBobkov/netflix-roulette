import React from 'react';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header component', () => {
    let componentMounted;

    beforeAll(() => {
        componentMounted = mount(<Router><Header /></Router>);
    });

    it('should be render correctly', () => {
        expect(componentMounted).toMatchSnapshot();
    });
});