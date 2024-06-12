import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIE_API } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIE_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json));
  };
};

export default useUpcomingMovies;
