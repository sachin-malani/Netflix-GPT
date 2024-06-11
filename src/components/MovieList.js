import {
  calculateProgressBar,
  handleCarouselClick,
  throttle,
} from "../utils/Carousel";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
  }, 250);

  window.addEventListener("resize", throttleProgressBar);

  return (
    <div className="my-10 row">
      <div className="header-container">
        <p className="text-white font-bold title">{title}</p>
        <div className="progress-bar"></div>
      </div>
      <div className="movie-container">
        <button
          className="handle left-handle"
          onClick={(e) => handleCarouselClick(e)}
        >
          <div className="text">&#8249;</div>
        </button>
        <div className="slider">
          {movies &&
            movies.results.map((movie) => (
              <MovieCard key={movie.id} poster={movie.poster_path} />
            ))}
        </div>
        <button
          className="handle right-handle"
          onClick={(e) => handleCarouselClick(e)}
        >
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
