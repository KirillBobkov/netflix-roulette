import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

export const Main = (props) => <main className='main'>{props.children}</main>;

Main.propTypes = {
    children: PropTypes.node
};