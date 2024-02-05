import { createSlice } from "@reduxjs/toolkit";

const stats = createSlice({
  name: "stats",
  initialState: [],
  reducers: {
    getOverAllStats: (state, action) => {
      state = action.payload;
      console.log("hi", state);
      return state;
    },
  },
});
export const { getOverAllStats } = stats.actions;
export default stats.reducer;
