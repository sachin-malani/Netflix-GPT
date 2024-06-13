import { BACKGROUND_URL } from "../utils/constant";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = () => {
  return (
    <div>
      <img
        className="absolute"
        alt="background"
        src={BACKGROUND_URL}
      />
      <div className="relative top-14">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearchPage;
