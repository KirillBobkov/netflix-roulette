import React from 'react';
import { Button } from '../primitives';

export class SearchParameters extends React.PureComponent {
  render() {
    return (
      <div className='toolbar__search-parameters'>
        <span className='toolbar__search-description'>Search By</span>
        <Button 
          className='button--choosen button--left-border'
          text='Title'
        />
        <Button 
          className='button--right-border'
          text='Gengre'
        />
      </div>
      );
  }
}




