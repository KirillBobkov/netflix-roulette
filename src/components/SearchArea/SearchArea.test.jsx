import React from 'react';
import { SearchArea } from './SearchArea';
import { shallow, mount } from 'enzyme';

describe('SearchArea component', () => {
    let componentShallowed, componentMounted;

    beforeAll(() => {
        componentShallowed = shallow(<SearchArea />);
        componentMounted = mount(<SearchArea />);
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should check that  SearchArea contains input and button', () => {
        expect(componentMounted.exists('.input')).toEqual(true);
        expect(componentMounted.exists('.button')).toEqual(true);
    });
});