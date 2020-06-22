import React from 'react';
import PropTypes from 'prop-types';

export const MainPage = (props) => <>{props.children}</>;

MainPage.propTypes = {
    children: PropTypes.node
};