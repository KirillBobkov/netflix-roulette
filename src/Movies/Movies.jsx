import React from 'react';
import { movies } from '../moviesData';
import Movie from '../Movie';
import './Movies.scss'

export default class Movies extends React.PureComponent {
    constructor(props) {
        super(props)
        this.moviesList = movies.map((movie, index) =>
        <Movie key={movie.id} index={index}  info={movie} />
      );
    }

    render() {
        return (
            <div className='movies'>
                <ul className='movies__container'>
                   {this.moviesList}
                </ul>  
            </div>
        );
    }
}
