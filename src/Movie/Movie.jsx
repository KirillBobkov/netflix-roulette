import React from 'react';
import './Movie.scss'

export default ({ index, info }) => (
   <li className='movies__item'>
       <p className='movies__poster'>
           <img 
                src={`posters/${index + 1}.png`} 
                width='300'
                height='400' 
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
