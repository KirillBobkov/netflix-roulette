/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';

export default (props) => (
  <header className='header'>
    <div className='header__container'>
      <h1 className='header__title'>
        <span className='header__title--bold'>netflix</span>roulette
      </h1>

      {props.children}
    </div>
  </header>
);
