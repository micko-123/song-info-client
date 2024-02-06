import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS, DELETE_SONG_BY_ID } from "../../redux/types";
import { setSongSlice } from "../../redux/slice/song";
import { useEffect } from "react";
import { Flex, Box, Text, Button } from "rebass";
import { css } from "@emotion/react";
import { Song } from "../../types";

const cardStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 5%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const songInfoStyle = css`
  flex-grow: 1;
`;

const buttonStyle = css`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const editButtonStyle = css`
  background-color: #007bff;
  color: white;
`;

const deleteButtonStyle = css`
  background-color: #dc3545;
  color: white;
`;

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
          <Flex css={cardStyle} key={song._id}>
            <Box css={songInfoStyle}>
              <Text as="h3">Title: {song.title}</Text>
              <Text>Album: {song.album}</Text>
              <Text>Artist: {song.artist}</Text>
              <Text>Genre: {song.genre}</Text>
            </Box>
            <Box className="buttons">
              <Button
                css={[buttonStyle, editButtonStyle]}
                onClick={() => dispatch(setSongSlice(song))}
              >
                Edit
              </Button>
              <Button
                css={[buttonStyle, deleteButtonStyle]}
                onClick={() => {
                  console.log(song._id);
                  dispatch({ type: DELETE_SONG_BY_ID, _id: song._id });
                }}
              >
                Delete
              </Button>
            </Box>
          </Flex>
        ))}
    </div>
  );
};

export default Songs;
