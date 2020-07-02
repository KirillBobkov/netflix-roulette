import React from 'react';
import { Button } from '../primitives';
import PropTypes from 'prop-types';

export class SearchParameters extends React.PureComponent {
  render() {
    const choosenSearchByTitleClassName = this.props.searchByTitleMode ? 'button--choosen' : '';
    const choosenSearchByGenreClassName = !this.props.searchByTitleMode ? 'button--choosen' : '';
    
    return (
      <div className='toolbar__search-parameters'>
        <span className='toolbar__search-description'>Search By</span>
        <Button 
          className={`${choosenSearchByTitleClassName} button--left-border`}
          text='Title'
          onClick={this.props.handleSearchByTitle}
        />
        <Button 
          className={`${choosenSearchByGenreClassName} button--right-border`}
          text='Gengre'
          onClick={this.props.handleSearchByGenre}
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




