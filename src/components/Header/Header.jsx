import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = (props) => {
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

Header.propTypes = {
  children: PropTypes.node,
  clearMoviesList: PropTypes.func,
  clearFilter: PropTypes.func
};