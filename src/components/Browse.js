import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative">
      <div className="flex items-center justify-between relative z-20">
        <Header />
      </div>
      <div className="absolute -top-32 left-0 z-10">
        <MainContainer />
        <div className="bg-black">
          <SecondaryContainer />
        </div>
      </div>
    </div>
  );
};

export default Browse;
