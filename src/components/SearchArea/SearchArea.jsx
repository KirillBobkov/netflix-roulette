import React from 'react';
import { Input, Button } from '../primitives';
import PropTypes from 'prop-types';

export class SearchArea extends React.PureComponent {
  render() {
    const { 
      handleInputChange, 
      inputSearchValue, 
      handleReset, 
      handleSearchMovies 
    } = this.props;

    return (
      <div className='toolbar__search'>
        <Input  
          className='toolbar__input'
          placeholder='Search'
          onChange={handleInputChange}
          value={inputSearchValue}
        />
        <Button 
          className='button--reset'
          text='reset'
          onClick={handleReset}
        />
        <Button 
          className='button--search'
          text='Search'
          onClick={handleSearchMovies}
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


