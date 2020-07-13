import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fillStore } from '../../store';
import { fetchAndStore, getMovies } from '../../utils';

class Sorting extends React.PureComponent {

  handleSortBy = () => {
    const { fillStore, filter: { searchBy, search } } = this.props;
    let { filter: { sortBy } }  = this.props;

    sortBy === "release_date" ? sortBy = "vote_average" : sortBy = "release_date";

    fetchAndStore( getMovies({
        sortBy: sortBy,
        sortOrder: "asc",
        searchBy: searchBy,
        search: search
      }), fillStore 
    );
  }

  render() {
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
}

Sorting.propTypes = {
  fillStore: PropTypes.func,
  list:  PropTypes.array,
  filter: PropTypes.shape({
    sortBy: PropTypes.string,
    searchBy: PropTypes.string,
    search: PropTypes.string
  })
};
const mapStateToProps = state => ({ list: state.list, filter: state.filter  });
const mapDispatchToProps = { fillStore };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
