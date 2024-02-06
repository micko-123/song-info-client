import React, { useEffect } from "react";
import { Flex, Box, Text } from "rebass";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { GET_OVERALL_STATS } from "../../redux/types";

const containerStyle = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Courier New", Courier, monospace;
`;

const cardStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const headerStyle = css`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const statsStyle = css`
  margin-bottom: 20px;
`;

const bulletStyle = css`
  color: #007bff;
`;

const albumStyle = css`
  color: #28a745;
`;

const artistStyle = css`
  color: #dc3545;
`;

const DisplayStats: React.FC = () => {
  const stats = useSelector((state) => state.stats);
  const dispatch = useDispatch();
  console.log(stats);
  useEffect(() => {
    dispatch({ type: GET_OVERALL_STATS });
  }, []);

  return (
    <Flex css={containerStyle} flexDirection="column">
      <Text as="h2" css={headerStyle}>
        Overall Statistics
      </Text>
      {stats.totalStats && (
        <Flex
          css={statsStyle}
          flexDirection={["column", "row"]}
          justifyContent="space-between"
        >
          <Box css={cardStyle} width={["100%", "30%"]}>
            <Text as="h3">Total Number</Text>
            <Text as="p">Songs: {stats.totalStats.totalSongs}</Text>
            <Text as="p">Artists: {stats.totalStats.totalArtists}</Text>
            <Text as="p">Albums: {stats.totalStats.totalAlbums}</Text>
            <Text as="p">Genres: {stats.totalStats.totalGenres}</Text>
          </Box>
          <Box css={cardStyle} width={["100%", "30%"]}>
            <Text as="h4">Number of songs in each genre:</Text>
            {stats.genreStats.map(({ _id, count }) => (
              <Text key={_id} css={bulletStyle}>
                {_id}: {count}
              </Text>
            ))}
          </Box>
          <Box css={cardStyle} width={["100%", "30%"]}>
            <Text as="h4">Number of songs in each album:</Text>
            {stats.albumStats.map(({ _id, count }) => (
              <Text key={_id} css={albumStyle}>
                {_id}: {count}
              </Text>
            ))}
          </Box>
          <Box css={cardStyle} width={["100%", "30%"]}>
            <Text as="h4">Number of albums each artist has:</Text>
            {stats.artistStats.map(({ _id, totalAlbums }) => (
              <Text key={_id} css={artistStyle}>
                {_id}: {totalAlbums}
              </Text>
            ))}
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default DisplayStats;
