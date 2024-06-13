import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptSearchResult: null,
    movies: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, result } = action.payload;
      state.gptSearchResult = movieNames;
      state.movies = result;
    },
  },
});

export const { toggleGPTSearch, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
