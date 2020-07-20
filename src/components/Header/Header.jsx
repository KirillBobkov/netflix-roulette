import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = (props) => (
  <header className='header'>
    <div className='header__container'>
      <Link to='/movies'>
        <h1 className='header__title'>
          <span className='header__title--bold'>netflix</span>roulette
        </h1>
      </Link>
      {props.children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node
};