import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_API } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json));
  };
};

export default useTopRatedMovies;