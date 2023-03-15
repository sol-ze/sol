import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ays: "",
};

const aysSlice = createSlice({
  name: "ays",
  initialState,
  reducers: {
    addASD(state, actions) {
      state.ays = state.ays + actions.payload;
    },
  },
});

export const aysActions = aysSlice.actions;

export default aysSlice.reducer;
