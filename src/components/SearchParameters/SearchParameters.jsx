import React from 'react';
import { Button } from '../primitives';
import PropTypes from 'prop-types';

export class SearchParameters extends React.Component {
  handleSearchBy = (event) => {
    const searchBy = event.target.innerHTML.toLowerCase();
    const { setSearchBy } = this.props;

    setSearchBy(searchBy);
  }

  render() {
    const { filter: { searchBy } } = this.props;
    const searchByTitleMode = searchBy === 'title';
    const searchByTitleClassName = searchByTitleMode ? 'button--choosen' : '';
    const searchByGenreClassName = !searchByTitleMode ? 'button--choosen' : '';

    return (
      <div className='toolbar__search-parameters'>
        <span className='toolbar__search-description'>Search By</span>
        <Button 
          className={`${searchByTitleClassName} button--left-border`}
          text='Title'
          onClick={this.handleSearchBy}
        />
        <Button 
          className={`${searchByGenreClassName} button--right-border`}
          text='Genres'
          onClick={this.handleSearchBy}
        />
      </div>
      );
  }
}

SearchParameters.propTypes = {
  setSearchBy: PropTypes.func,
  filter: PropTypes.shape({
    sortBy: PropTypes.string,
    searchBy: PropTypes.string,
    search: PropTypes.string
  })
};




