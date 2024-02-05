// import Song from "./Song/Song";
import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS, DELETE_SONG_BY_ID } from "../../redux/types";
import { setSongSlice } from "../../redux/slice/song";
import { useEffect } from "react";
import "./song.css"; // Import CSS file for styling
import { Song } from "../../types";

const Songs = () => {
  const songs: Song[] = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);
  
  console.log(songs);

  return (
    <div>
      {songs &&
        songs.map((song: Song) => (
          <div className="card" key={song._id}>
            <div className="song-info">
              <h3>Title: {song.title}</h3>
              <p>Album: {song.album}</p>
              <p>Artist: {song.artist}</p>
              <p>Genre: {song.genre}</p>
            </div>
            <div className="buttons">
              <button onClick={() => dispatch(setSongSlice(song))}>Edit</button>
              <button
                onClick={() => {
                  console.log(song._id);
                  dispatch({ type: DELETE_SONG_BY_ID, _id: song._id });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Songs;
