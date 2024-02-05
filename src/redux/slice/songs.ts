import { createSlice } from "@reduxjs/toolkit";

const songs = createSlice({
  name: "songs",
  initialState: [
    {
      _id: "",
      title: "",
      artist: "",
      album: "",
      genre: "",
    },
  ],
  reducers: {
    getSongsSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addSongSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editSongSlice: (state, action) => {
      state = state.map((i) =>
        i._id == action.payload._id ? action.payload : i
      );
      return state;
    },
    deleteSongSlice: (state, action) => {
      state = state.filter((i) => i._id !== action.payload);
      return state;
    },
  },
});
export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songs.actions;
export default songs.reducer;
