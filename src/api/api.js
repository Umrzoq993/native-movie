import { api_key, token } from "../constants/constants";

export const base_url = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = () => {
  return fetch(`${base_url}/trending/movie/day?api_key=${api_key}`).then(
    (res) => res.json()
  );
};

export const fetchUpcomingMovies = () => {
  return fetch(`${base_url}/movie/upcoming?api_key=${api_key}`).then((res) =>
    res.json()
  );
};

export const fetchTopRatedMovies = () => {
  return fetch(`${base_url}/movie/top_rated?api_key=${api_key}`).then((res) =>
    res.json()
  );
};

export const fetchPopularMovies = () => {
  return fetch(`${base_url}/movie/popular?api_key=${api_key}`).then((res) =>
    res.json()
  );
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${base_url}/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Search error:", error);
    return { results: [] };
  }
};

export const image500 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : null;
};

export const image342 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : null;
};

export const image185 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : null;
};
