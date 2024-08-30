import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    isp: null,
  },
  reducers: {
    changePreferredLanguage: (state, action) => {
      state.lang = action.payload;
    },
    updateISP: (state, action) => {
      state.isp = action.payload;
    }
  },
});

export const { changePreferredLanguage, updateISP } = configSlice.actions;
export default configSlice.reducer;
