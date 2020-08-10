// @flow
import * as React from 'react';
import { Movie } from '../Movie';
import './Movies.scss';

type MoviesItemsProps = {
  list: Array<Object>
}

type MoviesListProps = {
  list: Array<Object>
}

//Create a node list from movies array
export const MoviesItems = ({ list } : MoviesItemsProps) : Array<React.Node>=> {
    return list.map((movie) => <Movie key={movie.id} movie={movie} />);
};

//Render movies or return fallback message
export const MoviesList = ({ list } : MoviesListProps) => {
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

