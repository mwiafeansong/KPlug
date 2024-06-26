export const BASE_URL = 'https://api.themoviedb.org/3/';
export const baseImageUrl = 'https://image.tmdb.org/t/p/original';
export const baseImageUrlWithWidth = 'https://image.tmdb.org/t/p/w500';
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={}&release_date.lte={max_date}');
