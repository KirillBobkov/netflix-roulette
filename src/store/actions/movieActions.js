import { getMovies } from '../../utils';
import { setLoading } from '../actions/spinnerActions';
import { setNewFilter } from './filterActions';

export const SET_MOVIES = 'SET_MOVIE';
export const setMovies = (value) => ({ type: SET_MOVIES, payload: value });

export const fetchMovies = (config) => (dispatch, getState) => {
  dispatch(setLoading());

  getMovies(config)
    .then(data => {
      const fetchedMovies = Array.from(data.data.data);
      const filterParams = data.config.params;

      dispatch(setMovies(fetchedMovies));
      dispatch(setNewFilter(filterParams));
      dispatch(setLoading());
    })
    .catch((err) => console.log(err));
};

