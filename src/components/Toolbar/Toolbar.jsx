import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import './Toolbar.scss';

export class Toolbar extends React.Component {
  render() {
    return (
      <div className='toolbar'>
        <h2 className='toolbar__title'>Find your movie</h2>
        <SearchArea />
        <SearchParameters />
      </div>
    );
  }
}
