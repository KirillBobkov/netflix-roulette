import { getMovies } from '../utils';
export const SET_MOVIES = 'SET_MOVIE';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const OPEN_SPINNER = 'OPEN_SPINNER';
export const CLOSE_SPINNER = 'CLOSE_SPINNER';

export const setMovies = (value) => ({ type: SET_MOVIES, payload: value });
export const setSearchBy = (value) => ({ type: SET_SEARCH_BY, payload: value });
export const openSpinner = () => ({ type: OPEN_SPINNER, payload: {} });
export const closeSpinner = () => ({ type: CLOSE_SPINNER, payload: {} });

export const fetchMovies = (config) => (dispatch, getState) => {
  dispatch(openSpinner());

   //setTimeout is just for demonstrating spinner
  getMovies(config)
    .then(data => {
      const fetchedData = { list: data.data.data };
      const filterParams = { filter: data.config.params };
      dispatch(setMovies({...fetchedData, ...filterParams }));
    })
    .catch(() => {
      dispatch(closeSpinner());
    } );
  
};

