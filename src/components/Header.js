import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGPTSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changePreferredLanguage } from "../utils/configSlice";
import { removeMovieResult } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isGPT = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    dispatch(removeMovieResult());
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changePreferredLanguage(e.target.value));
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between md:mx-20 w-full z-20 ">
      <div>
        <img
          className="cursor-pointer"
          width="144"
          height="96"
          src={logo}
          alt="netflix"
        />
      </div>
      {user && (
        <div className="relative w-full flex justify-evenly md:justify-normal md:w-auto items-center gap-4">
          {isGPT && (
            <select
              className="px-4 py-2 bg-black text-white border border-white rounded-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-red-600 px-4 py-2 text-white rounded-sm"
            onClick={handleGPTSearchClick}
          >
            {isGPT ? "Home" : "GPT Search"}
          </button>
          <button
            className="bg-red-600 px-4 py-2 text-white rounded-sm"
            onClick={handleSignOut}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
