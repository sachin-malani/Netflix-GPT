import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie?.trailerVideo);
  const API = trailer
    ? "https://www.youtube.com/embed/" + trailer[0].key + "?&autoplay=1&mute=1"
    : "https://www.youtube.com/embed/";
  console.log(trailer);
  useGetTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={API}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
