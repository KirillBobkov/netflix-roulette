/* eslint-disable react/prop-types */
import React from 'react';
import './Movie.scss';

export const Movie = ({ index, info }) => (
  <li className='movies__item'>
    <p className='movies__poster'>
      <img 
        src={`posters/${index + 1}.png`} 
        width='260'
        height='365' 
        alt={info.name}
      />
    </p>

    <p className='movies__description'>
      <span className='movies__title'>
        {info.name}
      </span>

      <span className='movies__gengre'>
        {info.gengre}
      </span>

      <span className='movies__year'>
        {info.year}
      </span>
    </p>
  </li>
);
