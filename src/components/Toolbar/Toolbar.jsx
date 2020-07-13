import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import './Toolbar.scss';
import {  setMovies,fetchMovies } from '../../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../utils';

class Toolbar extends React.Component {
  state = {
    inputSearchValue: '',
  }

  handleSearchMovies = () => {
    const { inputSearchValue } = this.state;
    const { setMovies, filter: { searchBy, sortBy } } = this.props;
    
    if (inputSearchValue) {
      fetchMovies({
          sortBy,
          sortOrder: "asc",
          searchBy,
          search: inputSearchValue
        }, setMovies );
    }
  }
  
  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ inputSearchValue: value });
  }

  handleReset = () => {
    const { setMovies } = this.props;
    this.setState({ inputSearchValue: '' });

    fetchMovies({
      sortBy: "release_date",
      sortOrder: "asc",
      searchBy: "title",
      search: ''
    }, setMovies);
  };
 
  render() {
    const { inputSearchValue } = this.state;

    return (
      <div className='toolbar'>
        <h2 className='toolbar__title'>Find your movie</h2>
        <SearchArea 
          inputSearchValue={inputSearchValue} 
          handleInputChange={this.handleInputChange} 
          handleSearchMovies={this.handleSearchMovies}
          handleReset={this.handleReset}
        />
        <SearchParameters />
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state, filter: state.filter  });
const mapDispatchToProps = { setMovies };
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

Toolbar.propTypes = {
  setMovies: PropTypes.func,
  filter: PropTypes.object
};
