// @flow
import * as React from 'react';
import { Input, Button } from '../primitives';
import { SearchAreaForm } from './SearchArea.styles';

type SearchAreaProps = {
  fetchMovies: Function,
  filter: Object,
  match: Object,
  isSearchPage: boolean,
  history: Object
}

export const SearchArea = ({
  fetchMovies,
  filter,
  match,
  isSearchPage,
  history,
}: SearchAreaProps) => {
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (isSearchPage) {
      setInputValue(match.params.query);
      fetchMovies({
        sortBy: filter.sortBy,
        sortOrder: 'asc',
        searchBy: filter.searchBy,
        search: match.params.query,
      });
    }
  }, []);

  const handleSearchSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const uri = encodeURI(inputValue);

    if (inputValue) {
      history.push(`/search/${uri}`);

      fetchMovies({
        sortBy: filter.sortBy,
        sortOrder: 'asc',
        searchBy: filter.searchBy,
        search: inputValue,
      });
    }
  };

  const handleInputChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };

  return (
    <SearchAreaForm onSubmit={handleSearchSubmit}>
      <Input
        fullWidth={isSearchPage}
        placeholder='Search'
        onChange={handleInputChange}
        value={inputValue}
      />

      {isSearchPage
        ? <Button
          type='submit'
          searchIcon
          text=''
          />
        : <Button
          type='submit'
          search
          text='Search'
          />}
    </SearchAreaForm>
  );
};
