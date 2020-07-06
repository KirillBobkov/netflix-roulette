import axios from 'axios';

const api = axios.create({
    baseURL: "https://reactjs-cdp.herokuapp.com/",
    responseType: "json"
});

export const getMovies = (params = { 
    sortBy: "release_date", 
    sortOrder: "asc", 
    searchBy: "title" 
}) => {
    return api.get('/movies', {
        params
    });
};




