import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.scss';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: 'Something went wrong'
    };
  }

  static getDerivedStateFromError({ message }) {
    return { hasError: true, message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error'>
          <span className='error__message'>
            {this.state.message}
          </span>
        </div>);
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};