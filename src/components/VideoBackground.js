import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie?.trailerVideo);

  const API = trailer
    ? "https://www.youtube.com/embed/" +
      trailer[0].key +
      "?&autoplay=1&mute=1&background=1&controls=0&rel=0&autoplay=1"
    : "https://www.youtube.com/embed/";

    useGetTrailer(movieId);
    
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video border-0"
        src={API}
        title="Trailer"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
