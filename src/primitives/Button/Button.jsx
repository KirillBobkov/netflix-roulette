import React from 'react';
import './Button.scss';

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={'button ' + `${props.className || ''}`}
      id={`${props.id || ''}`}
    >
      {props.text}
    </button>
  );
}
