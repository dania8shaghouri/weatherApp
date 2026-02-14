import { createSlice } from "@reduxjs/toolkit";

const wetherApiSlice = createSlice({
  name: "weatherApi",
  initialState: {
    result: "empty",
  },
  reducers: {
    changeResult: (state, action) => {
      state.result = "changed";
    },
  },
});

export const { changeResult } = wetherApiSlice.actions;
export default wetherApiSlice.reducer;
