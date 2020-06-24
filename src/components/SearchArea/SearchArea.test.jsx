import React from 'react';
import { SearchArea } from './SearchArea';
import { shallow, mount } from 'enzyme';

describe('SearchArea component', () => {

    it('should be render correctly', () => {
        const component = shallow(<SearchArea />);

        expect(component).toMatchSnapshot();
    });

    it('renders title of SearchArea', () => {
        const component = mount(<SearchArea />);

        expect(component.exists('.input')).toEqual(true);
        expect(component.exists('.button')).toEqual(true);
    });
});