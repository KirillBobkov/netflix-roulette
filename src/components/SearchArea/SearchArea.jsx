import React from 'react';
import { Input, Button } from '../primitives';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/actions/movieActions';
import { connect } from 'react-redux';
import { history } from '../../utils/history';
import { withRouter } from 'react-router-dom';

class SearchArea extends React.PureComponent {
  state = {
    inputSearchValue: '',
  }
  
  componentDidMount() {
    const { 
      isSearchPage, 
      fetchDataMovies, 
      filter: { searchBy, sortBy }, 
      match: {  
        params: { query } 
      } 
    } = this.props;

    if (isSearchPage) {
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
  match: PropTypes.object,
  isSearchPage: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  const { filter } = state;

  return { 
    filter, 
    isSearchPage: ownProps.match.path.includes('search'),
    isMainPage: ownProps.match.path.includes('movie')  
  };
};
  
const mapDispatchToProps = dispatch => ({
  fetchDataMovies: (config) => dispatch(fetchMovies(config))
});

export default withRouter ( connect(mapStateToProps, mapDispatchToProps)(SearchArea) );

