import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movieActions';
import { MoviesList } from './Movies';

const mapStateToProps = (state) => ({ list: state.list });

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);