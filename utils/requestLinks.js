import { BASE_URL, API_KEY } from './constants';

const pageNum = Math.floor(Math.random() * 20 + 1);

export const netflixOrginalsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&page=${pageNum}&api_key=${API_KEY}`;

export const actionShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&with_genres=10759&api_key=${API_KEY}`;

export const comedyShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&with_genres=35&api_key=${API_KEY}`;

export const crimeShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&with_genres=80&api_key=${API_KEY}`;

export const dramaShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&with_genres=18&api_key=${API_KEY}`;

export const mysteryShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&with_genres=9648&api_key=${API_KEY}`;

export const popularShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&api_key=${API_KEY}`;

export const topRatedShowsLink = `${BASE_URL}/discover/tv?include_adult=false&language=en-US&sort_by=vote_average.desc&vote_count.gte=200&with_origin_country=KR&api_key=${API_KEY}`;

export const upcomingShowsLink = `${BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&first_air_date.gte=${new Date()
  .toISOString()
  .slice(0, 10)}&api_key=${API_KEY}`;

export const trendingShowsLink = `${BASE_URL}/trending/tv/day?language=en-US&api_key=${API_KEY}`;

//MOVIE LINKS
export const popularMoviesLink = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&with_origin_country=KR&sort_by=popularity.desc&api_key=${API_KEY}`;

export const trendingMoviesLink = `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;

export const topRatedMoviesLink = `${BASE_URL}/discover/movie?include_adult=false&language=en-US&sort_by=vote_average.desc&vote_count.gte=200&with_origin_country=KR&api_key=${API_KEY}`;

export const upcomingMoviesLink = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_origin_country=KR&with_release_type=2&release_date.gte=${new Date()
  .toISOString()
  .slice(0, 10)}&api_key=${API_KEY}`;
