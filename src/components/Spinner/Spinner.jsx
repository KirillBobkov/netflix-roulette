/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { SpinnerWrapper, SpinnerLoader } from './Spinner.styles';

export const Spinner = ({ isOpen }) => (
  isOpen && (
    <SpinnerWrapper>
      <SpinnerLoader />
    </SpinnerWrapper>
  )
);

const mapStateToProps = (state) => ({ isOpen: state.spinner });

export default connect(mapStateToProps, null)(Spinner);

Spinner.defaultProps = {
  isOpen: false,
};
