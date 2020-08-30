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

export const SearchParameters = ({ setSearchBy, filter: { searchBy } }: SearchParametersProps) => {
  const searchByTitleMode = searchBy === 'title';

  const handleSearchBy = (event: SyntheticEvent<HTMLButtonElement>) => {
    const searchBy = event.currentTarget.innerHTML.toLowerCase();
    setSearchBy(searchBy);
  };

  return (
    <SearchParametersWrapper>
      <SearchParametersDescription>Search By</SearchParametersDescription>
      <Button
        leftBorder
        choosen={searchByTitleMode}
        text='Title'
        onClick={handleSearchBy}
      />
      <Button
        rightBorder
        choosen={!searchByTitleMode}
        text='Genres'
        onClick={handleSearchBy}
      />
    </SearchParametersWrapper>
  );
};