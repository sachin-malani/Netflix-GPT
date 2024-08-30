import { useDispatch, useSelector } from "react-redux";
import language from "../utils/language";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS, GPT_QUERY } from "../utils/constant";
import { addGPTMovieResult, updateIsLoading } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const preferredLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGPTSearchClick = async () => {
    dispatch(updateIsLoading(true));
    // console.log(searchText.current.value);
    const searchResult = await openai.chat.completions.create({
      messages: [
        { role: "user", content: GPT_QUERY + searchText.current.value },
      ],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = searchResult?.choices?.[0]?.message?.content.split(", ");
    // console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovie(movie));
    const result = await Promise.all(promiseArray);
    console.log(result);
    // const filteredResult = result.map((arr) =>
    //   arr.filter((movie) => gptMovies.includes(movie.title))
    // );

    const filteredResult = result.map((arr) => {
      const seenTitles = new Set();
      return arr.flat().filter((movie) => {
        if (gptMovies.includes(movie.title) && !seenTitles.has(movie.title)) {
          seenTitles.add(movie.title);
          return true;
        }
        return false;
      });
    });

    // console.log(filteredResult);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, result: filteredResult })
    );
    dispatch(updateIsLoading(false));
  };

  return (
    <div className="flex justify-center">
      <form
        className="grid md:grid-cols-12 gap-4 bg-black p-4 w-11/12 md:w-3/5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="focus:outline-none px-4 py-2 md:col-span-10"
          type="text"
          placeholder={language[preferredLanguage].gptSearchPlaceholder}
        />
        <button
          className="bg-red-600 px-4 py-2 text-white rounded-sm md:col-span-2"
          onClick={handleGPTSearchClick}
        >
          {language[preferredLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
