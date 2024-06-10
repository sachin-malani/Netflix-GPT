import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex items-center justify-between mx-4">
      <Header />
    </div>
  );
};

export default Browse;
