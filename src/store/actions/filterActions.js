export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_NEW_FILTER = 'SET_NEW_FILTER';
export const setSearchBy = (value) => ({ type: SET_SEARCH_BY, payload: value });
export const setNewFilter = (value) => ({ type: SET_NEW_FILTER, payload: value });