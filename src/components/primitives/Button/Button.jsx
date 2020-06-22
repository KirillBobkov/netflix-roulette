import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
};
