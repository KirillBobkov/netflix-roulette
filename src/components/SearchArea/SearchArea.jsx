import React from 'react';
import { Input, Button } from '../primitives';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/actions/movieActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class SearchArea extends React.PureComponent {
  constructor(props) {
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

  

  // componentWillMount() {
  //   const { 
  //     isSearchPage, 
  //     fetchMovies, 
  //     filter: { searchBy, sortBy }, 
  //     match: {  
  //       params: { query } 
  //     } 
  //   } = this.props;

  //   if (isSearchPage) {
  //     this.setState({ inputSearchValue: query });
  
  //     fetchMovies({
  //         sortBy,
  //         sortOrder: "asc",
  //         searchBy,
  //         search: query
  //     });
  //   }
  // }

  handleSearchMovies = () => {
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
  fetchMovies: PropTypes.func,
  filter: PropTypes.object,
  match: PropTypes.object,
  isSearchPage: PropTypes.bool,
  history: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const { filter } = state;

  return { 
    filter, 
    isSearchPage: ownProps.match.path.includes('search')
  };
};
  
const mapDispatchToProps = dispatch => ({
  fetchMovies: (config) => dispatch(fetchMovies(config))
});


export default withRouter ( connect(mapStateToProps, mapDispatchToProps)(SearchArea) );

