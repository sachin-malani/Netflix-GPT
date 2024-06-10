import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constant";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlaying(json));
  };

  return (
    <div className="flex items-center justify-between mx-4">
      <Header />
    </div>
  );
};

export default Browse;
