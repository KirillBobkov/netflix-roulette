import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import './Toolbar.scss';
import {  fillStore } from '../../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMoviesBySearch, getMovies } from '../../utils';
import { fetchAndStore } from '../../utils';

class Toolbar extends React.Component {
  state = {
    inputSearchValue: '',
    searchByTitleMode: true
  }

  onHandleSearchByTitle = () => {
    const { searchByTitleMode } = this.state;
    if (!searchByTitleMode) {
      this.setState({ searchByTitleMode: !searchByTitleMode });
    }
  }

  onHandleSearchByGenre = () => {
    const { searchByTitleMode } = this.state;
    if (searchByTitleMode) {
      this.setState({ searchByTitleMode: !searchByTitleMode });
    }
  }

  onHandleSearchMovies = () => {
    const { inputSearchValue, searchByTitleMode } = this.state;
    const { fillStore } = this.props;
    
    if (inputSearchValue) {
      searchByTitleMode 
      ? fetchAndStore( getMoviesBySearch('title', inputSearchValue), fillStore )
      : fetchAndStore( getMoviesBySearch('genres', inputSearchValue), fillStore );
      this.setState({ inputSearchValue: '' });
    }
  }
  
  onHandleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ inputSearchValue: value });
  }

  onHandleReset = () => {
    const { fillStore } = this.props;
    this.setState({ inputSearchValue: '' });
    fetchAndStore( getMovies(), fillStore );
  };
 
  render() {
    const { inputSearchValue, searchByTitleMode } = this.state;

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
          handleSearchByTitle={this.onHandleSearchByTitle} 
          handleSearchByGenre={this.onHandleSearchByGenre}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state });
const mapDispatchToProps = { fillStore };
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

Toolbar.propTypes = {
  fillStore: PropTypes.func
};
