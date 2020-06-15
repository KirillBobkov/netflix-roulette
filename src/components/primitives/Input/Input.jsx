/* eslint-disable react/prop-types */
import './Input.scss';
import React from 'react';

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


