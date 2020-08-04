import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MovieInfo } from './MovieInfo';

const mapStateToProps = (state, ownProps) => {
  const { 
    match: { 
      params: { id }
    }
  } = ownProps;

  return {
    state,
    movie: state.list.find(item => item.id === Number(id))
  };
};

export default withRouter( connect(mapStateToProps, null)(MovieInfo) );