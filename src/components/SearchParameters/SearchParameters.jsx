import React from 'react';
import { Button } from '../primitives';

export default class SearchArea extends React.PureComponent {
  render() {
    return (
        <div className='toolbar__search-parameters'>
            <span className='toolbar__search-description'>Search By</span>
            <Button 
            className='button button--choosen button--left-border'
            text={'Title'} 
            />
            <Button 
            className='button button--right-border'
            text={'Gengre'} 
            />
        </div>
      );
  }
}




