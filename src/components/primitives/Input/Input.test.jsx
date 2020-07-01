import React from 'react';
import { Input } from './Input';
import { shallow, mount } from 'enzyme';

describe('Input component', () => {
    let config = {};

    beforeAll(() => {
        config = {
            class: 'toolbar__input',
            placeholder: 'Search',
            value: 'Kill Bill'
        };
    }); 

    it('should be render correctly', () => {
        const component = shallow(<Input className={config.class} placeholder={config.placeholder} />);

        expect(component).toMatchSnapshot();
    });


    it('should check that rendered html is correct', () => {
        const component = mount(<Input className={config.class} placeholder={config.placeholder} value={config.value} />);

        expect(component.html()).toBe('<input class=\"input toolbar__input\" placeholder=\"Search\" value=\"Kill Bill\">');
    });


    it('should be call onClick', () => {
        const handleChange = jest.fn();
        const component = mount(<Input className={config.class} placeholder={config.placeholder} onChange={handleChange} />);
       
        component.simulate('change');
        expect(handleChange).toHaveBeenCalled();
    });
});