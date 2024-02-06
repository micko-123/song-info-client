import { useSelector } from "react-redux";
import { Flex, Box } from "rebass";
import Form from "../components/Form/Form";
import Songs from "../components/Songs/Songs";
import { Song } from "../types";

const homeStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const songListStyle = {
  width: "80%",
};

const formStyle = {
  width: "80%",
};

const filterStyle = {
  marginLeft: "5px",
  alignItems: "center",
};

const Homepage = () => {
  const songs: Song[] = useSelector((state) => state.songs);

  return (
    <Flex css={homeStyle}>
      <Box css={songListStyle}>
        <Songs />
      </Box>
      <Box css={formStyle}>
        <Form />
      </Box>
    </Flex>
  );
};

export default Homepage;
