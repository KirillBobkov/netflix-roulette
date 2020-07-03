import React from 'react';
import { Button } from '../primitives';
import PropTypes from 'prop-types';

export class SearchParameters extends React.PureComponent {
  render() {
    const { searchByTitleMode, handleSearchByTitle, handleSearchByGenre } = this.props;
    const searchByTitleClassName = searchByTitleMode ? 'button--choosen' : '';
    const searchByGenreClassName = !searchByTitleMode ? 'button--choosen' : '';
    
    return (
      <div className='toolbar__search-parameters'>
        <span className='toolbar__search-description'>Search By</span>
        <Button 
          className={`${searchByTitleClassName} button--left-border`}
          text='Title'
          onClick={handleSearchByTitle}
        />
        <Button 
          className={`${searchByGenreClassName} button--right-border`}
          text='Gengre'
          onClick={handleSearchByGenre}
        />
      </div>
      );
  }
}

SearchParameters.propTypes = {
  handleSearchByTitle: PropTypes.func,
  handleSearchByGenre: PropTypes.func,
  searchByTitleMode: PropTypes.bool
};




