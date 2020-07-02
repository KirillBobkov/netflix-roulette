import React from 'react';
import { Input, Button } from '../primitives';
import PropTypes from 'prop-types';

export class SearchArea extends React.PureComponent {
  render() {
    return (
      <div className='toolbar__search'>
        <Input  
          className='toolbar__input'
          placeholder='Search'
          onChange={this.props.handleInputChange}
          value={this.props.inputSearchValue}
        />
        <Button 
          className='button--reset'
          text='reset'
          onClick={this.props.handleReset}
        />
        <Button 
          className='button--search'
          text='Search'
          onClick={this.props.handleSearchMovies}
        />
      </div>
    );
  }
}

SearchArea.propTypes = {
  handleSearchMovies: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleReset: PropTypes.func,
  inputSearchValue: PropTypes.string
};


