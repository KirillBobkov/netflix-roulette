// @flow
import React from 'react';
import { Button } from '../primitives';
import { 
  SearchParametersDescription, 
  SearchParametersWrapper 
} from './SearchParameters.styles';

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

    return (
      <SearchParametersWrapper>
        <SearchParametersDescription>Search By</SearchParametersDescription>
        <Button
          leftBorder
          choosen={searchByTitleMode}
          text='Title'
          onClick={this.handleSearchBy}
        />
        <Button
          rightBorder
          choosen={!searchByTitleMode}
          text='Genres'
          onClick={this.handleSearchBy}
        />
      </SearchParametersWrapper>
    );
  }
}
