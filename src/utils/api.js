import axios from 'axios';

export const getMovies = () => {
    return axios.get('https://reactjs-cdp.herokuapp.com/movies');
};