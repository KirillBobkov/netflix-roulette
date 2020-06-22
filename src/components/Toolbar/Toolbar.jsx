import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import './Toolbar.scss';

export const Toolbar = () => (
  <div className='toolbar'>
    <h2 className='toolbar__title'>Find your movie</h2>
    <SearchArea />
    <SearchParameters />
  </div>
);
