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


export class Sorting extends React.PureComponent<SortingProps> {
  handleSortBy = () => {
    const { fetchMovies, filter: { searchBy, search, sortBy } } = this.props;
    const sortByParam = sortBy === 'release_date' ? 'vote_average' : 'release_date';

    fetchMovies({
      sortBy: sortByParam,
      sortOrder: 'asc',
      searchBy,
      search,
    });
  }

  renderMoviePageUI() {
    const { filter: { searchBy } } = this.props;

    return (
      <SortingWrapper>
        <SortingContainer>
          <span className='sorting__match-movies'>Filtered by {searchBy}</span>
        </SortingContainer>
      </SortingWrapper>
    );
  }

  renderMainPageUI() {
    const { list, filter: { sortBy } } = this.props;
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
              onClick={this.handleSortBy}
            />
            <Button
              rightBorder
              choosen={!sortByDate}
              text='Rating'
              onClick={this.handleSortBy}
            />
          </p>
        </SortingContainer>
      </SortingWrapper>
    );
  }

  render() {
    const { isMoviePage } = this.props;

    return isMoviePage
      ? this.renderMoviePageUI()
      : this.renderMainPageUI();
  }
}
