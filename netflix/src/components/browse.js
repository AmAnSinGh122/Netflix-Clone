import React, { useEffect } from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./mainContainer";
import MovieContainer from "./movieContainer";
import UseNowPLayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcommingMovie";
import SearchMovie from "./searchMovie";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store)=> store.movie.toggle);
  const navigate = useNavigate();
  const dispatch= useDispatch();

//custom hooks
  UseNowPLayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(()=>{
    if (!user) {
      navigate("/");
    }
  },[])

  return (
    <div>
      <Header />
      <div>
      {
        toggle ? <SearchMovie /> : (
          <>
              <MainContainer />
              <MovieContainer />
          </>

        )
      }

      </div>
    </div>
  );
};

export default Browse;
