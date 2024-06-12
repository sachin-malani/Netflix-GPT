import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    movies && (
      <div className="bg-black">
        <div className="relative -mt-72 z-20">
          {movies.nowPlayingMovies && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />}
          {movies.popularMovies && <MovieList title={"Popular"} movies={movies.popularMovies} />}
          {movies.topRatedMovies && <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />}
          {movies.upcomingMovies && <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
