import { connect } from 'react-redux';
import { setSearchBy } from '../../store/actions/filterActions';
import { SearchParameters } from './SearchParameters';

const mapStateToProps = state => ({ filter: state.filter  });

const mapDispatchToProps = { setSearchBy };

export default connect(mapStateToProps, mapDispatchToProps)(SearchParameters);