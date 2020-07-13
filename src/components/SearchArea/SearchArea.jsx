import React from 'react';
import { Input, Button } from '../primitives';
import PropTypes from 'prop-types';
import {  setMovies, fetchMovies } from '../../store';
import { connect } from 'react-redux';
import { getMovies } from '../../utils';

class SearchArea extends React.PureComponent {
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
      <div className='toolbar__search'>
        <Input  
          className='toolbar__input'
          placeholder='Search'
          onChange={this.handleInputChange}
          value={inputSearchValue}
        />
        <Button 
          className='button--reset'
          text='reset'
          onClick={this.handleReset}
        />
        <Button 
          className='button--search'
          text='Search'
          onClick={this.handleSearchMovies}
        />
      </div>
    );
  }
}

SearchArea.propTypes = {
  setMovies: PropTypes.func,
  filter: PropTypes.object
};

const mapStateToProps = state => ({ movies: state, filter: state.filter  });
const mapDispatchToProps = { setMovies };
export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);

