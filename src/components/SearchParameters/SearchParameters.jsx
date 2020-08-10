// @flow
import React from 'react';
import { Button } from '../primitives';

type SearchParametersProps = {
  setSearchBy: Function,
  filter: {
    sortBy: string,
    searchBy: string,
    search: string
  }
}

export class SearchParameters extends React.PureComponent<SearchParametersProps> {
  handleSearchBy = (event: SyntheticEvent<HTMLButtonElement>) => {
    const searchBy = event.currentTarget.innerHTML.toLowerCase();
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





