import React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


//Create a node list from movies array
export const MoviesItems = ({ list }) => list.map((movie) => <Movie key={movie.id} movie={movie} />);

//Render movies or return fallback message
const MoviesList = ({ list }) => {
    const hasMovies = Boolean(list && Array.isArray(list) && list.length);
    
    return (
      <div className='movies'>
        <ul className='movies__container'>
          {hasMovies
              ? <MoviesItems list={list} />
              : <li>No movies found</li>}
        </ul>
      </div>
    );
};

const mapStateToProps = state => ({ list: state.list });
export const MoviesListWrapper = connect(mapStateToProps, null)(MoviesList);



MoviesList.defaultProps = {
  movies: null
};

MoviesList.propTypes = {
  list: PropTypes.array
};

