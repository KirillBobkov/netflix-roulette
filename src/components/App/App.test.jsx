import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { Footer } from '../Footer';

describe('App component', () => {
    it('should be render correctly', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });

    it('should contain Footer component', () => {
      const component = shallow(<App />);
      expect(component.contains(<Footer />)).toEqual(true);
    });
});