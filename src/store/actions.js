import { getMovies } from '../utils'
export const SET_MOVIES = 'SET_MOVIE';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';

export const setMovies = (value) => ({ type: SET_MOVIES, payload: value });
export const setSearchBy = (value) => ({ type: SET_SEARCH_BY, payload: value });

export const fetchMovies = (config, dispatch) => {
  getMovies(config)
      .then(data => {
        const fetchedData = { list: data.data.data };
        const filterParams = { filter: data.config.params };
        dispatch({ ...fetchedData, ...filterParams });
      })
      .catch(err => console.info('catch', err));
};

