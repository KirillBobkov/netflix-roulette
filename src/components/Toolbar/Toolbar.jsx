import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import './Toolbar.scss';
import { searchMoviesByGenre, searchMoviesByTitle, resetAllParameters } from '../../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    const { searchMoviesByTitle, searchMoviesByGenre  } = this.props;
  
    if (inputSearchValue) {
      searchByTitleMode 
      ? searchMoviesByTitle(inputSearchValue) 
      : searchMoviesByGenre(inputSearchValue);
      
      this.setState({
        inputSearchValue: ''
      });
    }
  }
  
  onHandleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      inputSearchValue: value
    });
  }

  onHandleReset = () => {
    const { resetAllParameters } = this.props;
    this.setState({
      inputSearchValue: ''
    });
    resetAllParameters();
  }
 
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
const mapDispatchToProps = { resetAllParameters, searchMoviesByGenre, searchMoviesByTitle };
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

Toolbar.propTypes = {
  searchMoviesByTitle: PropTypes.func,
  searchMoviesByGenre: PropTypes.func,
  resetAllParameters: PropTypes.func
};
