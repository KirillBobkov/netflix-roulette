export const FILL_STORE = 'FILL_STORE';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const SEARCH_MOVIES_BY_TITLE = 'SEARCH_MOVIES_BY_TITLE';
export const SEARCH_MOVIES_BY_GENRE = 'SEARCH_MOVIES_BY_GENRE';
export const RESET_ALL_PARAMETERS = 'RESET_ALL_PARAMETERS';

export const fillStore = (value) => ({
  type: FILL_STORE,
  payload: value
});

export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const sortByRating = () => ({
  type: SORT_BY_RATING
});

export const searchMoviesByGenre = (value) => ({
  type: SEARCH_MOVIES_BY_GENRE,
  payload: value
});

export const searchMoviesByTitle = (value) => ({
  type: SEARCH_MOVIES_BY_TITLE,
  payload: value
});

export const resetAllParameters = () => ({
  type: RESET_ALL_PARAMETERS
});





