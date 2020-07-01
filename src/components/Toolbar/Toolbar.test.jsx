import React from 'react';
import { Toolbar } from './Toolbar';
import { shallow, mount } from 'enzyme';

describe('Toolbar component', () => {

    it('should be render correctly', () => {
        const component = shallow(<Toolbar />);

        expect(component).toMatchSnapshot();
    });
 
    it('should render Toolbar title', () => {
        const component = mount(<Toolbar />);
        const sortDescription = component.find('.toolbar__title');

        expect(sortDescription.text()).toEqual('Find your movie');
    });
});