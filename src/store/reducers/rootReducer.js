import { combineReducers } from 'redux';
import { filterReducer as filter } from './filterReducer';
import { movieReducer as list } from './movieReducer';
import { spinnerReducer as spinner } from './spinnerReducer';

export default combineReducers({
  filter,
  spinner,
  list,
});
