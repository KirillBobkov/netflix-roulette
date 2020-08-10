/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './Spinner.scss';

export const Spinner = ({ isOpen }) => (
  isOpen && (
    <div className='spinner'>
      <div className='spinner__loader' />
    </div>
  )
);

const mapStateToProps = (state) => ({ isOpen: state.spinner });

export default connect(mapStateToProps, null)(Spinner);

Spinner.defaultProps = {
  isOpen: false,
};
