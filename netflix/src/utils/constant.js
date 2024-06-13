export const API_END_POINT= "http://localhost:8055/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDJlZGMxYzgyMzhiYzg3NGMxNzEwYWIzZjE0YTg0OSIsInN1YiI6IjY2Njc2MTFhYWMzNzFiMGVjOWE5YmQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BSA7dU8FO7kCLbPQn4Rz5spGFQBT6HGheDHI-2THsW8'
    }
  };

export const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing"
export const Popular_Movie="https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_Movie="https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movie ="https://api.themoviedb.org/3/movie/upcoming"

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500/"