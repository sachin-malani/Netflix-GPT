import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <img src={IMG_CDN + poster} alt="Poster" className="rounded-lg" />
  );
};

export default MovieCard;
