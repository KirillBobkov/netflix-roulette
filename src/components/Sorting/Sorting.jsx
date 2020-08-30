// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../primitives';
import { getTotalMoviesLength } from '../../store/selectors/moviesSelectors';
import {
  SortingWrapper,
  SortingContainer,
  SortingDescription,
  SortingMatchMovies
} from './Sorting.styles';

type SortingProps = {
  fetchMovies: Function,
  isMoviePage: boolean,
  list: Array<Object>,
  filter: {
    sortBy: string,
    searchBy: string,
    search: string
  }
};

export const Sorting = ({ 
  list, 
  isMoviePage, 
  fetchMovies, 
  filter: { searchBy, search, sortBy }
}: SortingProps) => {
  const handleSortBy = () => {
    if (search) {
    const sortByParam = sortBy === 'release_date' ? 'vote_average' : 'release_date';
    fetchMovies({
        sortBy: sortByParam,
        sortOrder: 'asc',
        searchBy,
        search,
      });
    }
  };

  if (isMoviePage) {
    return (
      <SortingWrapper>
        <SortingContainer>
          <span className='sorting__match-movies'>Filtered by {searchBy}</span>
        </SortingContainer>
      </SortingWrapper>
    );
  }

  const sortByDate = sortBy === 'release_date';

  return (
    <SortingWrapper>
      <SortingContainer>
        <SortingMatchMovies>
          {getTotalMoviesLength(list)} movies found
        </SortingMatchMovies>
        <p>
          <SortingDescription>Sort by</SortingDescription>
          <Button
            leftBorder
            choosen={sortByDate}
            text='Release date'
            onClick={handleSortBy}
          />
          <Button
            rightBorder
            choosen={!sortByDate}
            text='Rating'
            onClick={handleSortBy}
          />
        </p>
      </SortingContainer>
    </SortingWrapper>
  );
};
