import React from 'react';
import { Input, Button } from '../primitives';

export class SearchArea extends React.PureComponent {
  render() {
    return (
      <div className='toolbar__search'>
        <Input  
          className='toolbar__input'
          placeholder='Search'
        />
        <Button 
          className='button button--search'
          text='Search'
        />
      </div>
    );
  }
}