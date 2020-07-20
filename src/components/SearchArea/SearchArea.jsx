import React from 'react';
import { Input, Button } from '../primitives';
import PropTypes from 'prop-types';
import {  setMovies, fetchMovies } from '../../store';
import { connect } from 'react-redux';
import { history } from '../../utils/history';

class SearchArea extends React.PureComponent {
  state = {
    inputSearchValue: '',
  }

  componentDidMount() {
    const { inputSearchValue } = this.state;
    const { isSearchPage, fetchDataMovies, filter: { searchBy, sortBy } } = this.props;

    if (isSearchPage) {
      const path = window.location.pathname.split('/');
      const query = path[path.length - 1];
  
      this.setState({ inputSearchValue: query });
  
      fetchDataMovies({
        sortBy,
        sortOrder: "asc",
        searchBy,
        search: query
      });
    }
  }

  handleSearchMovies = () => {
    const { inputSearchValue } = this.state;
    const { fetchDataMovies, filter: { searchBy, sortBy } } = this.props;
    
    const uri = encodeURI(inputSearchValue);
    history.push(`/search/${uri}`);

    if (inputSearchValue) {
      fetchDataMovies({
          sortBy,
          sortOrder: "asc",
          searchBy,
          search: inputSearchValue
        } );
    }
  }
  
  handleInputChange = (event) => {
    const { value } = event.target;
   
    this.setState({ inputSearchValue: value });
  }



  render() {
    const { inputSearchValue } = this.state;
    const { isSearchPage } = this.props;
    let inputClassnames = isSearchPage 
    ? 'toolbar__input toolbar__input--full-width' 
    : 'toolbar__input';

    return (
      <div className='toolbar__search'>
        <Input  
          className={inputClassnames}
          placeholder='Search'
          onChange={this.handleInputChange}
          value={inputSearchValue}
        />
        
        {isSearchPage 
          ? 
            <Button 
              className='button--search-icon'
              text=''
              onClick={this.handleSearchMovies}
            />
          : 
            <Button 
              className='button--search'
              text='Search'
              onClick={this.handleSearchMovies}
            />}
      </div>
    );
  }
}

SearchArea.propTypes = {
  fetchDataMovies: PropTypes.func,
  filter: PropTypes.object,
  isSearchPage: PropTypes.bool
};

const mapStateToProps = state => ({ movies: state, filter: state.filter, isSearchPage: window.location.pathname.includes('search')  });
const mapDispatchToProps = dispatch => {
  return {
    fetchDataMovies: (config) => dispatch(fetchMovies(config))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);

