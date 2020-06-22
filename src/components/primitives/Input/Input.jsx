import './Input.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => (
  <input
    type={props.type}
    className={`input ${props.className || ''}`}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    disabled={props.disabled}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};


