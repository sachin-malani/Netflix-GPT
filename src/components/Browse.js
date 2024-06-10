import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="relative">
      <div className="flex items-center justify-between relative z-20">
        <Header />
      </div>
      <div className="absolute -top-32 left-0 z-10">
        <MainContainer />
        <div className="">
          <SecondaryContainer />
        </div>
      </div>
    </div>
  );
};

export default Browse;
