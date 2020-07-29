import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearMovies } from '../../store/actions/movieActions';
import { clearFilter } from '../../store/actions/filterActions';

const Header = (props) => {

  const handleClearMovies = () => {
    props.clearMoviesList();
    props.clearFilter();
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/movies'>
          <h1 className='header__title' onClick={handleClearMovies}>
            <span className='header__title--bold'>netflix</span>roulette
          </h1>
        </Link>
        {props.children}
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  clearMoviesList: () => dispatch(clearMovies()),
  clearFilter: () => dispatch(clearFilter())
});


export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  children: PropTypes.node,
  clearMoviesList: PropTypes.func,
  clearFilter: PropTypes.func
};