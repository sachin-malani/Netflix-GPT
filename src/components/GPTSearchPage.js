import { BACKGROUND_URL } from "../utils/constant";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = () => {
  return (
    <div className="max-w-[1920px]">
      <div className="relative top-14">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearchPage;
