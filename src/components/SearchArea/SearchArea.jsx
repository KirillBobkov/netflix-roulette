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

type SearchAreaState = {
  inputSearchValue: string
}

export class SearchArea extends React.PureComponent<SearchAreaProps, SearchAreaState> {
  constructor(props : SearchAreaProps) {
    super(props);
    this.state = { inputSearchValue: '' };

    if (this.props.isSearchPage) {
      this.state = { inputSearchValue: this.props.match.params.query };

      this.props.fetchMovies({
        sortBy: this.props.filter.sortBy,
        sortOrder: 'asc',
        searchBy: this.props.filter.searchBy,
        search: this.props.match.params.query,
      });
    }
  }

  handleSearchSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { inputSearchValue } = this.state;
    const { fetchMovies, filter: { searchBy, sortBy }, history } = this.props;
    const uri = encodeURI(inputSearchValue);

    history.push(`/search/${uri}`);

    if (inputSearchValue) {
      fetchMovies({
        sortBy,
        sortOrder: 'asc',
        searchBy,
        search: inputSearchValue,
      });
    }
  }

  handleInputChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;

    this.setState({ inputSearchValue: value });
  }

  render() {
    const { inputSearchValue } = this.state;
    const { isSearchPage } = this.props;

    return (
      <SearchAreaForm onSubmit={this.handleSearchSubmit}>
        <Input
          fullWidth={isSearchPage}
          placeholder='Search'
          onChange={this.handleInputChange}
          value={inputSearchValue}
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
  }
}
