const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getDetailUrl = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
