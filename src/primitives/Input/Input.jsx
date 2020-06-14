import './Input.scss';
import React from 'react';

export function Input(props) {
  return (
    <input
      type={props.type}
      className={`input ${props.className || ''}`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
}

