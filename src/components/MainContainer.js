import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const backgroundMovie = movies.results[0];

  const { original_title, overview, id } = backgroundMovie;
  console.log(backgroundMovie);
  return (
    <div className="mx-6">
      <VideoTitle title={original_title} desc={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
