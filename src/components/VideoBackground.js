import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie?.trailerVideo);
  useGetTrailer(movieId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
