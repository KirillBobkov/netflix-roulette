import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Spinner.scss';

export const Spinner = ({ isOpen }) => {
    return (
        isOpen && (
          <div className='spinner'>
            <div className='spinner__loader' />
          </div>
        )
    );
};


const mapStateToProps = state => ({ isOpen: state.spinner });

export default connect(mapStateToProps, null)(Spinner);

Spinner.propTypes = {
    isOpen: PropTypes.bool
};

Spinner.defaultProps = {
    isOpen: false
};
