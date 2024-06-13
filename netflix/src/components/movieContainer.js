import React from 'react'
import MovieList from './movieList';
import {useSelector} from "react-redux";

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10 text-bold' >
        <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upcommingMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer
