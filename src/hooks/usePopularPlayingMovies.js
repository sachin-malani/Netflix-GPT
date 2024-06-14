import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movie.popularMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json));
  };
};

export default usePopularPlayingMovies;
