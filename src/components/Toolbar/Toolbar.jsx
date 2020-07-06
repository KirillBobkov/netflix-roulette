import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import './Toolbar.scss';
import {  fillStore, setFilterParams } from '../../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../utils';
import { fetchAndStore } from '../../utils';

class Toolbar extends React.Component {
  state = {
    inputSearchValue: '',
  }

  onHandleSearchBy = () => {
    const { inputSearchValue } = this.state;
    const { fillStore, filter: { sortBy } } = this.props;
    let { filter: { searchBy } } = this.props;

    searchBy === "title" ? searchBy = "genres" : searchBy = "title";
    
    fetchAndStore( getMovies, {
        sortBy: sortBy,
        sortOrder: "asc",
        searchBy: searchBy,
        search: inputSearchValue
    }, fillStore );
  }

  onHandleSearchMovies = () => {
    const { inputSearchValue } = this.state;
    const { fillStore, filter: { searchBy, sortBy } } = this.props;
    
    if (inputSearchValue) {
      fetchAndStore( getMovies, {
          sortBy: sortBy,
          sortOrder: "asc",
          searchBy: searchBy,
          search: inputSearchValue
        }, fillStore );
    }
  }
  
  onHandleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ inputSearchValue: value });
  }

  onHandleReset = () => {
    const { fillStore } = this.props;
    this.setState({ inputSearchValue: '' });

    fetchAndStore( getMovies, {
      sortBy: "release_date",
      sortOrder: "asc",
      searchBy: "title",
      search: ''
    }, fillStore );
  };
 
  render() {
    const { inputSearchValue } = this.state;
    const { filter: { searchBy } } = this.props;
    const searchByTitleMode = searchBy === "title";

    return (
      <div className='toolbar'>
        <h2 className='toolbar__title'>Find your movie</h2>
        <SearchArea 
          inputSearchValue={inputSearchValue} 
          handleInputChange={this.onHandleInputChange} 
          handleSearchMovies={this.onHandleSearchMovies}
          handleReset={this.onHandleReset}
        />
        <SearchParameters 
          searchByTitleMode={searchByTitleMode} 
          handleSearchByTitle={this.onHandleSearchBy} 
          handleSearchByGenre={this.onHandleSearchBy}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state, filter: state.filter  });
const mapDispatchToProps = { fillStore, setFilterParams };
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

Toolbar.propTypes = {
  fillStore: PropTypes.func,
  filter: PropTypes.object
};
