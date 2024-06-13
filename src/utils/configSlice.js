import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changePreferredLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changePreferredLanguage } = configSlice.actions;
export default configSlice.reducer;
