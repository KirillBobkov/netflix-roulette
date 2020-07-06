import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fillStore } from '../../store';
import { getMoviesSortedByDate, getMoviesSortedByRating, fetchAndStore } from '../../utils';

class Sorting extends React.PureComponent {
  state = { checkedSortingByDate: true };
 
  handleSortByDate = () => {
    const { checkedSortingByDate } = this.state;
    const { fillStore } = this.props;

    if (!checkedSortingByDate) {
      this.setState({ checkedSortingByDate: !checkedSortingByDate });
      fetchAndStore( getMoviesSortedByDate(), fillStore );
    }
  }

  handleSortByRating = () => {
    const { checkedSortingByDate } = this.state;
    const { fillStore } = this.props;

    if (checkedSortingByDate) {
      this.setState({ checkedSortingByDate: !checkedSortingByDate });
      fetchAndStore( getMoviesSortedByRating(), fillStore );
    }
  }

  render() {
    const { checkedSortingByDate } = this.state;
    const dateClassName = checkedSortingByDate ? 'button--choosen' : '';
    const ratingClassName = !checkedSortingByDate ? 'button--choosen' : '';
    const { list } = this.props;

    return (
      <div className='sorting'>
        <div className='sorting__container'>
          <span className='sorting__match-movies'>{list && list.length} movies found</span>

          <p>
            <span className='sorting__sort-description'>Sort by</span>
            <Button
              className={`${dateClassName} button--left-border`}
              text='Release date'
              onClick={this.handleSortByDate}
            />
            <Button
              className={`${ratingClassName} button--right-border`}
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
  fillStore: PropTypes.func,
  list:  PropTypes.array
};
const mapStateToProps = state => ({ list: state.list });
const mapDispatchToProps = { fillStore };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
