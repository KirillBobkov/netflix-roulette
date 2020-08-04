import { fetchMovies } from '../../store/actions/movieActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { SearchArea } from './SearchArea';

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