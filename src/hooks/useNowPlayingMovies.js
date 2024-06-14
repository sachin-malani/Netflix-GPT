import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constant";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlaying(json));
  };
};

export default useNowPlayingMovies;
