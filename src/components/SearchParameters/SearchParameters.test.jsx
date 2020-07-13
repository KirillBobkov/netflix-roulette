import React from 'react';
import { SearchParameters } from './SearchParameters';
import { shallow, mount } from 'enzyme';

describe('SearchParameters component', () => {
    let componentShallowed, componentMounted;

    beforeAll(() => {
        componentShallowed = shallow(<SearchParameters />);
        componentMounted = mount(<SearchParameters />);
    });

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should check that title of SearchParameters is rendered', () => {
        expect(componentMounted.exists('.button')).toEqual(true);
    });
});