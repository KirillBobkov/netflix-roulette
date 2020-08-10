// @flow
import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';

type SortingProps = {
  fetchMovies: Function,
  isMoviePage: boolean,
  list:  Array<Object>,
  filter: {
    sortBy: string,
    searchBy: string,
    search: string
  }
};

export class Sorting extends React.PureComponent<SortingProps> {
  handleSortBy = () => {
    const { fetchMovies, filter: { searchBy, search, sortBy } } = this.props;
    let sortByParam = sortBy === "release_date" ? "vote_average" : "release_date";

    fetchMovies({
      sortBy: sortByParam,
      sortOrder: "asc",
      searchBy,
      search,
    });
  }

  renderMoviePageUI() {
    const { filter: { searchBy } } = this.props;

    return (
      <div className='sorting'>
        <div className='sorting__container'>
          <span className='sorting__match-movies'>Filtered by {searchBy}</span>
        </div>
      </div>
    );
  }

  renderMainPageUI() {
    const { list, filter: { sortBy } } = this.props;
    const sortByDate = sortBy === "release_date";
    const dateClassName = sortByDate ? 'button--choosen' : '';
    const ratingClassName = !sortByDate ? 'button--choosen' : '';

    return (
      <div className='sorting'>
        <div className='sorting__container'>
          <span className='sorting__match-movies'>{list && list.length} movies found</span>

          <p>
            <span className='sorting__sort-description'>Sort by</span>
            <Button
              className={`${dateClassName} button--left-border`}
              text='Release date'
              onClick={this.handleSortBy}
            />
            <Button
              className={`${ratingClassName} button--right-border`}
              text='Rating'
              onClick={this.handleSortBy}
            />
          </p>
        </div>
      </div>
    );
  }

  render() {
    const { isMoviePage } = this.props;
  
    return isMoviePage
    ? this.renderMoviePageUI()
    : this.renderMainPageUI();
  }
}



