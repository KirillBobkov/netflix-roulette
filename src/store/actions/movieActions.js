import { getMovies } from '../../utils';
import { setLoading } from '../actions/spinnerActions';
import { setNewFilter } from './filterActions';
import { call, put, all, takeLatest } from 'redux-saga/effects';

export const SET_MOVIES = 'SET_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = (value) => ({ type: FETCH_MOVIES, payload: value });
export const setMovies = (value) => ({ type: SET_MOVIES, payload: value });
export const clearMovies = () => ({ type: CLEAR_MOVIES, payload: {} });

export function* fetchMoviesAsync(action) {
  yield put(setLoading());
  
  const response = yield call(getMovies, action.payload);
  const fetchedMovies = Array.from(response.data.data);
  const filterParams = response.config.params;

  yield put(setMovies(fetchedMovies));
  yield put(setNewFilter(filterParams));
  yield put(setLoading());
};

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
};

