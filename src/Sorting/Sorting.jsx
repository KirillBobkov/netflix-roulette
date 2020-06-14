import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';

export default function Sorting() {
  return (
    <div className='sorting'>
        <div className='sorting__container'>
            <span className='sorting__sort-description'>Sort by</span>
            <Button 
            className='button button--choosen button--left-border'
            text={'Release date'} 
            />
            <Button 
            className='button button--right-border'
            text={'Rating'} 
            />      
        </div>  
    </div>
  );
}



