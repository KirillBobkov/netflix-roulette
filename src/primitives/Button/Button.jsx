import React from 'react';
import './Button.scss';

export const Button = (props) =>  (
  <button
    onClick={props.onClick}
    className={'button ' + `${props.className || ''}`}
    id={`${props.id || ''}`}
  >
    {props.text}
  </button>
);
