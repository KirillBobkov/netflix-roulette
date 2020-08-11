//@flow
import './Input.scss';
import React from 'react';

type InputProps = {
  type: string,
  placeholder: string,
  onChange: Function,
  value: string,
  className: string,
  disabled: boolean
};

export const Input = (props: InputProps) => (
  <input
    type={props.type}
    className={`input ${props.className || ''}`}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    disabled={props.disabled}
  />
);
