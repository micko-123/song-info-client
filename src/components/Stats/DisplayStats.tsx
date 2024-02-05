import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_OVERALL_STATS } from "../../redux/types";

const DisplayStats: React.FC = () => {
  const stats = useSelector((state) => state.stats);
  const dispatch = useDispatch();
  console.log(stats);
  useEffect(() => {
    dispatch({ type: GET_OVERALL_STATS });
  }, []);

  // const [stats, setStats] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/v1/songs/overAllStats")
  //     .then((response) => {
  //       setStats(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching overall stats:", error);
  //     });
  // }, []);

  return (
    <div>
      <h2>Overall Statistics</h2>
      {stats.totalStats && (
        <div>
          <p>Total number of songs: {stats.totalStats.totalSongs}</p>
          <p>Total number of artists: {stats.totalStats.totalArtists}</p>
          <p>Total number of albums: {stats.totalStats.totalAlbums}</p>
          <p>Total number of genres: {stats.totalStats.totalGenres}</p>
          <h3>Number of songs in each genre:</h3>
          <ul>
            {stats.genreStats.map(({ _id, count }) => (
              <li key={_id}>
                {_id}: {count}
              </li>
            ))}
          </ul>
          <h3>Number of songs in each album:</h3>
          <ul>
            {stats.albumStats.map(({ _id, count }) => (
              <li key={_id}>
                {_id}: {count}
              </li>
            ))}
          </ul>

          <h3>Number of albums each artist has:</h3>
          {stats.artistStats.map(({ _id, totalAlbums }) => (
            <li key={_id}>
              {_id}: {totalAlbums}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayStats;
