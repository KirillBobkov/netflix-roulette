import {
  FILL_STORE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  SEARCH_MOVIES,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  RESET_ALL_PARAMETERS
} from './actions';

import { getMovies } from '../utils';
import { fillStore } from '../store';

describe('actions', () => {
  it('should create an action to add a category', async () => {
    expect.assertions(1);

    const data  = await getMovies();
    const movies = data.data.data;
    expect(fillStore(movies).payload.length).toBeGreaterThan(1);

  });
});