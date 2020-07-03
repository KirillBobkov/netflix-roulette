import React from 'react';
import { Button } from '../primitives';
import './Sorting.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortByDate, sortByRating } from '../../store';

class Sorting extends React.PureComponent {
  state = { checkedSortingByDate: null };
 
  handleSortByDate = () => {
    if (!this.state.checkedSortingByDate) {
      this.props.sortByDate();
      this.setState({ checkedSortingByDate: !this.state.checkedSortingByDate });
    }
  }

  handleSortByRating = () => {
    if (this.state.checkedSortingByDate) {
      this.props.sortByRating();
      this.setState({ checkedSortingByDate: !this.state.checkedSortingByDate });
    }
  }

  render() {
    const choosenDateClassName = this.state.checkedSortingByDate ? 'button--choosen' : '';
    const choosenRatingClassName = !this.state.checkedSortingByDate ? 'button--choosen' : '';
    const { list } = this.props;
    

    return (
      <div className='sorting'>
        <div className='sorting__container'>
          <span className='sorting__match-movies'>{list && list.length} movies found</span>

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
  list:  PropTypes.array
};
const mapStateToProps = state => ({ list: state.list });
const mapDispatchToProps = { sortByDate, sortByRating };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
