import React from 'react';
import { Sorting } from './Sorting';
import { shallow, mount } from 'enzyme';

describe('Sorting component', () => {

    it('should be render correctly', () => {
        const component = shallow(<Sorting />);

        expect(component).toMatchSnapshot();
    });

    it('should render title of Sorting', () => {
        const component = mount(<Sorting />);

        expect(component.exists('.button')).toEqual(true);
    });
 
    it('should render sorting description', () => {
        const component = mount(<Sorting />);
        const sortDescription = component.find('.sorting__sort-description');

        expect(sortDescription.text()).toEqual('Sort by');
    });
});