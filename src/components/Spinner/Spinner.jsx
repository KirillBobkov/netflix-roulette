import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Spinner.scss';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.root = document.createElement('div');
    }
    componentDidMount() {
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const { isOpen } = this.props;

        return ReactDOM.createPortal(
            isOpen && (
              <div className='spinner'>
                <div className='spinner__loader' />
              </div>
            ),
            this.root
        );
    }
}

const mapDispatchToProps = state => ({
    isOpen: state.spinner
});

export default connect(mapDispatchToProps, null)(Spinner);

Spinner.propTypes = {
    isOpen: PropTypes.bool
};

Spinner.defaultProps = {
    isOpen: false
};
