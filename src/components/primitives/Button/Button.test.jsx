import React from 'react';
import { Button } from './Button';
import { shallow, mount } from 'enzyme';
import { config } from 'chai';

describe('Button component', () => {
    let config, 
    componentShallowed,
    componentMounted,
    handleClick;

    beforeAll(() => {
        handleClick = jest.fn();
        config = {
            class: 'button button--search',
            text: 'Search'
        };
        componentShallowed = shallow(<Button className={config.class} text={config.text} onClick={handleClick} /> );
        componentMounted = mount(<Button className={config.class} text={config.text} onClick={handleClick} /> );
    }); 
   
    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should check that inner text of Button', () => {
        expect(componentMounted.text()).toEqual('Search');
    });

    it('should be call onClick', () => {
        componentMounted.simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});