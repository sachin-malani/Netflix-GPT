import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <img
      src={IMG_CDN + poster}
      alt="Poster"
      className=" rounded-lg hover:cursor-pointer hover:scale-150 transform transition ease-in-out duration-500 hover:z-50"
    />
  );
};

export default MovieCard;
