import React from "react";
import "./form.css"; 
import { useDispatch, useSelector } from "react-redux";
import { setSongSlice } from "../../redux/slice/song";
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../../redux/types";
import { nanoid } from "@reduxjs/toolkit"


const Form: React.FC = () => {

  const song = useSelector(state => state.song)
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setSongSlice({ ...song, [prop]: event.target.value }))
    }

    const handleSubmit = () => {
        song.id === 0 ? dispatch({ type: CREATE_SONG, song: { ...song, id: nanoid(8) } }) : dispatch({ type: UPDATE_SONG_BY_ID, song })

        dispatch(setSongSlice({
            title: '',
            artist: '',
            album: '',
            genre: ''
        }))
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={song.title}
        onChange={handleChange('title')}
        placeholder="title"
        className="input"
      />
      <input
        type="text"
        name="album"
        value={song.album}
        onChange={handleChange('album')}
        placeholder="album"
        className="input"
      />
      <input
        type="text"
        name="artist"
        value={song.artist}
        onChange={handleChange('artist')}
        placeholder="artist"
        className="input"
      />
      <input
        type="text"
        name="genre"
        value={song.genre}
        onChange={handleChange('genre')}
        placeholder="genre"
        className="input"
      />
      <button type="submit" className="button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </form>
  );
};

export default Form;
