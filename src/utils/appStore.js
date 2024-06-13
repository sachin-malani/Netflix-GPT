import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default appStore;
