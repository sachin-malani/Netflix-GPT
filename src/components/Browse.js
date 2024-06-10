import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Header />
      </div>

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
