import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reactjs-cdp.herokuapp.com/',
  responseType: 'json',
});

export const getMovies = (params = {
  sortBy: 'release_date',
  sortOrder: 'asc',
  searchBy: 'title',
}) => api.get('/movies', {
  params,
});

export const getImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = function() {
    resolve(url);
  };
  img.onerror = function() {
    reject(url);
  };
  img.src = url;
});
