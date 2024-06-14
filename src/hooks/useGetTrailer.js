import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailerVideo);

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailerList = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerList.length
      ? trailerList.filter((list) => list.name.includes("Official Trailer"))
      : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
};

export default useGetTrailer;
