import React from "react";
import "./song.css"; // Import CSS file for styling

interface Song {
  title: string;
  album: string;
  artist: string;
  genre: string;
}

interface SongProps {
  song: Song;
  onEdit: () => void;
  onDelete: () => void;
}

const Song: React.FC<SongProps> = ({ song, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="song-info">
        <h3>Title: {song.title}</h3>
        <p>Album: {song.album}</p>
        <p>Artist: {song.artist}</p>
        <p>Genre: {song.genre}</p>
      </div>
      <div className="buttons">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Song;
