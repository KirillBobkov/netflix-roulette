// @flow
import * as React from 'react';
import { Input, Button } from '../primitives';

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
          sortBy:this.props.filter.sortBy,
          sortOrder: "asc",
          searchBy: this.props.filter.searchBy,
          search:  this.props.match.params.query
      });
    }
  }

  handleSearchSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { inputSearchValue } = this.state;
    const { fetchMovies, filter: { searchBy, sortBy }, history } = this.props;
    const uri = encodeURI(inputSearchValue);

    history.push('/search/'+ inputSearchValue);

    if (inputSearchValue) {
        fetchMovies({
              sortBy,
              sortOrder: "asc",
              searchBy,
              search: inputSearchValue
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
    let inputClassnames = isSearchPage 
    ? 'toolbar__input toolbar__input--full-width' 
    : 'toolbar__input';

    return (
      <form 
        className='toolbar__search' 
        onSubmit={this.handleSearchSubmit}
      >
        <Input  
          className={inputClassnames}
          placeholder='Search'
          onChange={this.handleInputChange}
          value={inputSearchValue}
        />
        
        {isSearchPage 
          ? 
            <Button 
              type='submit'
              className='button--search-icon'
              text=''
            />
          : 
            <Button 
              type='submit'
              className='button--search'
              text='Search'  
            />}
      </form>
    );
  }
}





