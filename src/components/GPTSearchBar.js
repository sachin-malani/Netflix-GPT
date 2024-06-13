import { useSelector } from "react-redux";
import language from "../utils/language";

const GPTSearchBar = () => {
  const preferredLanguage = useSelector(store => store.config.lang);
  return (
    <div className="flex justify-center">
      <form className="grid grid-cols-12 gap-4 bg-black p-4 w-3/5">
        <input
          className="focus:outline-none px-4 py-2 col-span-10"
          type="text"
          placeholder={language[preferredLanguage].gptSearchPlaceholder}
        />
        <button className="bg-red-600 px-4 py-2 text-white rounded-sm col-span-2">{language[preferredLanguage].search}</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
