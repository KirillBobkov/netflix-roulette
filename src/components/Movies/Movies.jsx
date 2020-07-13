import React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fillStore } from '../../store';
import { getMovies } from '../../utils';
import { fetchAndStore } from '../../utils';

//Get data from server
class MoviesData extends React.Component {
    componentDidMount() { 
      const { fillStore } = this.props;
      
      fetchAndStore( getMovies({
        sortBy: "release_date",
        sortOrder: "asc",
        searchBy: "title"
      }), fillStore );
    }

    render() {
        const { list, render } = this.props;
        return render({ list });
    }
}

const mapStateToProps = state => ({ list: state.list });
const mapDispatchToProps = { fillStore };
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
              : null}
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
  fillStore: PropTypes.func,
  list: PropTypes.array
};

