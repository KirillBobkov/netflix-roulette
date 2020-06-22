import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.scss';

export class ErrorBoundary extends React.Component {
  static defaultProps = {
    children: null
  };

  state = {
      hasError: false,
      message: 'Something went wrong'
  };   

  static getDerivedStateFromError({ message }) {
    return { hasError: true, message };
  }

  renderFallbackUI = () => {
           const {message} = this.state;
           return (
             <div className='error'>
               <span className='error__message'>
                 {message}
               </span>
             </div>
           );
       }

  render() {
     const { hasError } = this.state;
     const { children } = this.props;

     return hasError
          ? this.renderFallbackUI()
          : children;
  };
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};