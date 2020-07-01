import React from 'react';
import { Button } from './Button';
import { shallow, mount } from 'enzyme';
import { config } from 'chai';

describe('Button component', () => {
    let config = {};

    beforeAll(() => {
        config = {
            class: 'button button--search',
            text: 'Search'
        };
    }); 
   
    it('should be render correctly', () => {
        const component = shallow(<Button className={config.class} text={config.text} />);

        expect(component).toMatchSnapshot();
    });


    it('should check that inner text of Button', () => {
        const component = mount(<Button className={config.class} text={config.text} />);

        expect(component.text()).toEqual('Search');
    });


    it('should be call onClick', () => {
        const handleClick = jest.fn();
        const component = mount(<Button className={config.class} text={config.text} onClick={handleClick} />);
       
        component.simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});