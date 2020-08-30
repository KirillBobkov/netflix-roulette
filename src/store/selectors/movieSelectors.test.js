import { movies } from '../../mocks/testData';
import * as selectors from './moviesSelectors';

describe('movie selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      list: movies.list
    };
  });

  it('should return length of movies array', () => {
    const actualResult = selectors.getTotalMoviesLength(state.list);

    expect(actualResult).toEqual(10);
  });

});
