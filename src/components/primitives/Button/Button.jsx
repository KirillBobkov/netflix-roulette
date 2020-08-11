// @flow
import React from 'react';
import './Button.scss';

type ButtonProps = {
  type: string,
  className: string,
  text: string,
  id: string,
  onClick: Function
};

export const Button = (props : ButtonProps) =>  (
  <button
    type={`${props.type || 'button'}`}
    onClick={props.onClick}
    className={'button ' + `${props.className || ''}`}
    id={`${props.id || ''}`}
  >
    {props.text}
  </button>
);


