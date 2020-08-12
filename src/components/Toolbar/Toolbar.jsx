import React from 'react';
import { SearchArea } from '../SearchArea';
import { SearchParameters } from '../SearchParameters';
import { ToolbarTitle } from './Toolbar.styles';

export const Toolbar = () => (
  <>
    <ToolbarTitle>Find your movie</ToolbarTitle>
    <SearchArea />
    <SearchParameters />
  </>
);
