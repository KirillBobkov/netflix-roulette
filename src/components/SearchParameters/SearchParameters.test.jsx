import React from 'react';
import { SearchParameters } from './SearchParameters';
import { shallow, mount } from 'enzyme';

describe('SearchParameters component', () => {

    it('should be render correctly', () => {
        const component = shallow(<SearchParameters />);

        expect(component).toMatchSnapshot();
    });

    it('should check that title of SearchParameters is rendered', () => {
        const component = mount(<SearchParameters />);

        expect(component.exists('.button')).toEqual(true);
    });
});