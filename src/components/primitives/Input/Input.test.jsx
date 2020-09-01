import React from 'react';
import { Input } from './Input';
import { shallow, mount } from 'enzyme';

describe('Input component', () => {
    let config, 
        handleChange,
        componentShallowed,
        componentMounted;

    beforeAll(() => {
        config = {
            class: 'toolbar__input',
            placeholder: 'Search',
            value: 'Kill Bill'
        };
        handleChange = jest.fn();
        componentShallowed = shallow(<Input className={config.class} placeholder={config.placeholder} value={config.value} onChange={handleChange} />);
        componentMounted = mount(<Input className={config.class} placeholder={config.placeholder} value={config.value} onChange={handleChange} />);
    }); 

    it('should be render correctly', () => {
        expect(componentShallowed).toMatchSnapshot();
    });

    it('should be call onClick', () => {
        componentMounted.simulate('change');
        expect(handleChange).toHaveBeenCalled();
    });
});