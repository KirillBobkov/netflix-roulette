import React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movieActions';

//Get data from server
class MoviesData extends React.PureComponent {

    // BY DEFAULT MAIN PAGE WITH MOVIES IS EMPTY

    // componentDidMount() { 
    //   const { fetchDataMovies, isMainPage } = this.props;
      
    //   fetchDataMovies({
    //     sortBy: "release_date",
    //     sortOrder: "asc",
    //     searchBy: "title"
    //   });
    // }

    render() {
        const { list, render } = this.props;
        return render({ list });
    }
}

const mapStateToProps = (state, ownProps) => { 
  return { list: state.list };

};

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export const MoviesDataWrapper = connect(mapStateToProps, mapDispatchToProps)(MoviesData);

//Create a node list from movies array
export const MoviesItems = ({ list }) => {
    return list.map((movie) => <Movie key={movie.id} movie={movie} />);
};

//Render movies or return fallback message
export const MoviesList = ({ list }) => {
    const hasMovies = Boolean(list && Array.isArray(list) && list.length);

    return (
      <div className='movies'>
        <ul className='movies__container'>
          {hasMovies
              ? <MoviesItems list={list} />
              : <li className='movies__error'>No movies found!</li>}
        </ul>
      </div>
    );
};

export const MoviesListContainer = () => {
  return  (<MoviesDataWrapper render={MoviesList} />);
};

MoviesList.defaultProps = {
  movies: null
};

MoviesList.propTypes = {
  list: PropTypes.array
};

MoviesData.propTypes = {
  render: PropTypes.func,
  // fetchDataMovies: PropTypes.func,
  // isMainPage: PropTypes.bool,
  list: PropTypes.array
};
