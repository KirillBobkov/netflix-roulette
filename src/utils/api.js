import axios from 'axios';

const api = axios.create({
    baseURL: "https://reactjs-cdp.herokuapp.com/",
    responseType: "json"
});

export const getMovies = () => {
    return api.get('/movies', {
        params: {
          sortBy: "release_date",
          sortOrder: "asc",
          searchBy: "title"
        }
      });
};

export const getMoviesSortedByDate = () => {
    return api.get('/movies', {
        params: {
          sortBy: "release_date",
          sortOrder: "asc",
          searchBy: "title"
        }
      });
};

export const getMoviesSortedByRating = () => {
    return api.get('/movies', {
        params: {
          sortBy: "vote_average",
          sortOrder: "asc",
          searchBy: "title"
        }
      });
};

export const getMoviesBySearch = (searchType, value) => {
    return api.get('/movies', {
        params: {
          sortBy: "vote_average",
          sortOrder: "asc",
          searchBy: searchType,
          search: value
        }
      });
}; 


