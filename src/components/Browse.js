import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
<<<<<<< HEAD
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
=======
>>>>>>> 83a0ef20dd4c73d5de82175686d1c3263bb5ab90

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
