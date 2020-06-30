import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';

export class Sorting extends React.PureComponent {
  render() {
    return (
      <div className='sorting'>
        <div className='sorting__container'>
          <span className='sorting__match-movies'>7 movies found</span>

          <p>
            <span className='sorting__sort-description'>Sort by</span>
            <Button
              className='button--choosen button--left-border'
              text='Release date'
            />
            <Button
              className='button--right-border'
              text='Rating'
            />
          </p>
        </div>
      </div>
    );
  }
}
