import { getMovies } from '../../utils';
import { setLoading } from './spinnerActions';
import { setNewFilter } from './filterActions';
import { call, put, takeEvery } from 'redux-saga/effects';

export const SET_MOVIES = 'SET_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = (value) => ({ type: FETCH_MOVIES, payload: value });
export const setMovies = (value) => ({ type: SET_MOVIES, payload: value });
export const clearMovies = () => ({ type: CLEAR_MOVIES, payload: {} });

export function* fetchMoviesAsync(action) {
  yield put(setLoading(true));

  const response = yield call(getMovies, action.payload);
  const fetchedMovies = response.data.data;
  const filterParams = response.config.params;

  yield put(setMovies(fetchedMovies));
  yield put(setNewFilter(filterParams));
  yield put(setLoading(false));
}

export function* watchFetchMovies() {
  yield takeEvery(FETCH_MOVIES, fetchMoviesAsync);
}
