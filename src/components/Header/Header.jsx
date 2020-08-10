// @flow
import * as React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

type HeaderProps = {
    clearMoviesList: Function,
    clearFilter: Function,
    children? : React.Node
}

export const Header = (props : HeaderProps) => {
  const handleClearMovies = () => {
    props.clearMoviesList();
    props.clearFilter();
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/movies'>
          <h1 className='header__title' onClick={handleClearMovies}>
            <span className='header__title--bold'>netflix</span>roulette
          </h1>
        </Link>
        {props.children}
      </div>
    </header>
  );
};
