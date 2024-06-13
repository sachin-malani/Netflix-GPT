import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const isGPT = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div className="relative">
      <div className="flex items-center justify-between relative z-20">
        <Header />
      </div>
      {isGPT ? (
        <div className="z-20 relative">
          <GPTSearchPage />
        </div>
      ) : (
        <div className="absolute top-0 left-0 z-10">
          <MainContainer />
          <div className="bg-black">
            <SecondaryContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
