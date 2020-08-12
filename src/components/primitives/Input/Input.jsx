//@flow
import React from 'react';
import { InputInnerWrapper } from './Input.styles';

type InputProps = {
  type: string,
  placeholder: string,
  onChange: Function,
  value: string,
  disabled: boolean,
  fullWidth: boolean
};

export const Input = (props: InputProps) => (
  <InputInnerWrapper
    type={props.type}
    fullWidth={props.fullWidth}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    disabled={props.disabled}
  />
);
