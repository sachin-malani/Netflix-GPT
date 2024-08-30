import { useSelector } from "react-redux";
import MovieCard from "./MovieCard.js";
import Loader from "./Loader.js";

const GPTMovieSuggestion = () => {
  const { gptSearchResult, movies, isLoading } = useSelector(
    (store) => store.gpt
  );
  console.log(isLoading);

  if (!movies) return null;
  return (
    <div className="m-4 w-full  p-4">
      <div className="gptMovies flex gap-4 flex-wrap justify-center">
        {/* {movies.map((movie) => (
          <MovieCard key={movie?.[0]?.id} poster={movie?.[0]?.poster_path} />
        ))} */}
        {isLoading ? (
          <Loader />
        ) : (
          movies.map((movieArray) => {
            if (movieArray.length > 0 && movieArray[0]) {
              return (
                <MovieCard
                  key={movieArray[0]?.id}
                  poster={movieArray[0]?.poster_path}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
