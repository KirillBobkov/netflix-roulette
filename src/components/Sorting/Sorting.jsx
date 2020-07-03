import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortByDate, sortByRating } from '../../store';

class Sorting extends React.PureComponent {
  state = { checkedSortingByDate: null };
 
  handleSortByDate = () => {
    const { checkedSortingByDate } = this.state;
    if (!checkedSortingByDate) {
      this.props.sortByDate();
      this.setState({ checkedSortingByDate: !checkedSortingByDate });
    }
  }

  handleSortByRating = () => {
    const { checkedSortingByDate } = this.state;
    if (checkedSortingByDate) {
      this.props.sortByRating();
      this.setState({ checkedSortingByDate: !checkedSortingByDate });
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
  sortByDate: PropTypes.func,
  sortByRating: PropTypes.func,
  list:  PropTypes.array
};
const mapStateToProps = state => ({ list: state.list });
const mapDispatchToProps = { sortByDate, sortByRating };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
