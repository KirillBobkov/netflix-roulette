import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movieActions';
import { withRouter } from 'react-router-dom';
import { Sorting } from './Sorting';

const mapStateToProps = (state, ownProps) => { 
  const { list, filter } = state;

  return { 
    list, 
    filter, 
    isMoviePage: Boolean(ownProps.match.params.id) };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (config) => dispatch(fetchMovies(config))
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Sorting) );
