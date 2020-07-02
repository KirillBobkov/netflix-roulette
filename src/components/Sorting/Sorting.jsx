import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortByDate, sortByRating } from '../../store';

class Sorting extends React.PureComponent {
  state = {
    checkedSortingByDate: true
  }
 
  handleSortByDate = () => {
    this.props.sortByDate();

    if (!this.state.checkedSortingByDate) {
      this.setState({ checkedSortingByDate: !this.state.checkedSortingByDate });
    }
  }

  handleSortByRating = () => {
    this.props.sortByRating();

    if (this.state.checkedSortingByDate) {
      this.setState({ checkedSortingByDate: !this.state.checkedSortingByDate });
    }
  }

  render() {
    const choosenDateClassName = this.state.checkedSortingByDate ? 'button--choosen' : '';
    const choosenRatingClassName = !this.state.checkedSortingByDate ? 'button--choosen' : '';

    return (
      <div className='sorting'>
        <div className='sorting__container'>
          <span className='sorting__match-movies'>{this.props.movies.length} movies found</span>

          <p>
            <span className='sorting__sort-description'>Sort by</span>
            <Button
              className={`${choosenDateClassName} button--left-border`}
              text='Release date'
              onClick={this.handleSortByDate}
            />
            <Button
              className={`${choosenRatingClassName} button--right-border`}
              text='Rating'
              onClick={this.handleSortByRating}
            />
          </p>
        </div>
      </div>
    );
  }
}

Sorting.propTypes = {
  sortByDate: PropTypes.func,
  sortByRating: PropTypes.func,
  movies:  PropTypes.array
};

const mapStateToProps = state => ({ movies: state });
const mapDispatchToProps = { sortByDate, sortByRating };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
