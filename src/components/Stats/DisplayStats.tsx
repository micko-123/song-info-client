// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for making HTTP requests

// interface Song {
//   title: string;
//   artist: string;
//   album: string;
//   genre: string;
// }

const DisplayStats: React.FC = () => {
  //   const [stats, setStats] = useState<Song[]>(null);

  //   useEffect(() => {
  //     axios
  //       .get("/api/overallStats") // Replace '/api/overallStats' with your actual API endpoint
  //       .then((response) => {
  //         setStats(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching overall stats:", error);
  //       });
  //   }, []);

  return (
    <div>
      <h2>Overall Statistics</h2>
      {/* {stats && (
        <div>
          <p>Total number of songs: {stats.totalSongs}</p>
          <p>Total number of artists: {stats.totalArtists}</p>
          <p>Total number of albums: {stats.totalAlbums}</p>
          <p>Total number of genres: {stats.totalGenres}</p>
          <h3>Number of songs in each genre:</h3>
          <ul>
            {Object.entries(stats.songsInGenres).map(([genre, count]) => (
              <li key={genre}>
                {genre}: {count}
              </li>
            ))}
          </ul>
          <h3>Number of songs in each album:</h3>
          <ul>
            {Object.entries(stats.songsInAlbums).map(([album, count]) => (
              <li key={album}>
                {album}: {count}
              </li>
            ))}
          </ul>
          <h3>Number of albums each artist has:</h3>
          <ul>
            {Object.entries(stats.albumsByArtists).map(([artist, count]) => (
              <li key={artist}>
                {artist}: {count}
              </li>
            ))}
          </ul>
          <h3>Songs in each album:</h3>
          <ul>
            {Object.entries(stats.songsInEachAlbum).map(([album, count]) => (
              <li key={album}>
                {album}: {count}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default DisplayStats;
