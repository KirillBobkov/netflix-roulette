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
    if (!this.state.searchByTitleMode) {
      this.setState({ searchByTitleMode: !this.state.searchByTitleMode });
    }
  }

  onHandleSearchByGenre = () => {
    if (this.state.searchByTitleMode) {
      this.setState({ searchByTitleMode: !this.state.searchByTitleMode });
    }
  }

  onHandleSearchMovies = () => {
    const { inputSearchValue } = this.state;
  
    if (inputSearchValue) {
      this.state.searchByTitleMode 
      ? this.props.searchMoviesByTitle(inputSearchValue) 
      : this.props.searchMoviesByGenre(inputSearchValue);
      
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
    this.setState({
      inputSearchValue: ''
    });

    this.props.resetAllParameters();
  }
 
  render() {
    return (
      <div className='toolbar'>
        <h2 className='toolbar__title'>Find your movie</h2>
        <SearchArea 
          inputSearchValue={this.state.inputSearchValue} 
          handleInputChange={this.onHandleInputChange} 
          handleSearchMovies={this.onHandleSearchMovies}
          handleReset={this.onHandleReset}
        />
        <SearchParameters 
          searchByTitleMode={this.state.searchByTitleMode} 
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
