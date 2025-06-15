import { api_key } from "../constants/constants";
import { apiRequest } from "./axios";

export const base_url = "https://api.themoviedb.org/3";

const trendingMovies = `${base_url}/trending/movie/day?api_key=${api_key}`;
const upComingMovies = `${base_url}/movie/upcoming?api_key=${api_key}`;
const topRatedMovies = `${base_url}/movie/top_rated?api_key=${api_key}`;

export const fetchTrendingMovies = () => {
  return apiRequest(trendingMovies);
};

export const fetchUpcomingMovies = () => {
  return apiRequest(upComingMovies);
};

export const fetchTopRatedMovies = () => {
  return apiRequest(topRatedMovies);
};

export const getPosterImage500 = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null;
};

export const getPosterImage342 = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w342${posterPath}` : null;
};

export const getPosterImage185 = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : null;
};
