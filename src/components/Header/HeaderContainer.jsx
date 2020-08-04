import { connect } from 'react-redux';
import { Header } from './Header';
import { clearMovies } from '../../store/actions/movieActions';
import { clearFilter } from '../../store/actions/filterActions';

const mapDispatchToProps = dispatch => ({
  clearMoviesList: () => dispatch(clearMovies()),
  clearFilter: () => dispatch(clearFilter())
});

export default connect(null, mapDispatchToProps)(Header);