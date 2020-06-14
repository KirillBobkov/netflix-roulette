import './Checkbox.scss';
import React from 'react';

export function Checkbox (props) {
  return (
    <span className={props.className}>
      <input
        type='checkbox'
        onChange={props.onChange}
        id={props.id}
        checked={props.done}
      />
      <label htmlFor={props.id} />
    </span>
  );
}
