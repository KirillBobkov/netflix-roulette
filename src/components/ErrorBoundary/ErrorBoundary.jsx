// @flow
import * as React from 'react';
import { Error, ErrorMessage } from './ErrorBoundary.styles';

type ErrorBoundaryProps = {
    children? : React.Node
}

type ErrorBoundaryState = {
    hasError: boolean,
    message: string,
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps = {
    children: null,
  };

  state = {
    hasError: false,
    message: 'Something went wrong',
  };

  static getDerivedStateFromError(state : ErrorBoundaryState) {
    const { message } = state;
    return { hasError: true, message };
  }

  renderFallbackUI = () => {
    const { message } = this.state;
    return (
      <Error>
        <ErrorMessage>
          {message}
        </ErrorMessage>
      </Error>
    );
  }

  render() : any {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError
      ? this.renderFallbackUI()
      : children;
  }
}
