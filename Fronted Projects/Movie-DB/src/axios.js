import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API;
export const request = `/discover/movie?api_key=${API_KEY}`;
export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
