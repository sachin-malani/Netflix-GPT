import { useSelector } from "react-redux";

const GPTMovieSuggestion = () => {
  const { gptSearchResult, movies } = useSelector((store) => store.gpt);
  return (<div>
    
  </div>);
};

export default GPTMovieSuggestion;
