export const USER_PROFILE =
  "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXMrBpySF8XZ8sCkWvT8aguR_wkRNG3R8T7iwBTsIkMyYwlB6it3SFUkQreUS4BP7yzuo542K7ZoPtOd13o6SbNT3mRrFQA.png?r=6a6";

export const BACKGROUND_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIE_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const GET_ISP = "http://ip-api.com/json";
export const ISP_JIO = "Reliance Jio Infocomm Limited";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_KEY ,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAPI_KEY = process.env.REACT_APP_OPENAPI_KEY;

export const GPT_QUERY =
  "Act as a Movie recommendation system and only give me the name of 10 movies, comma seperated like the example result given ahead. Example Result: Fast & Furious, Sholay, Interstellar, KGF, Golmaal Returns. Suggest some movies for the query ";