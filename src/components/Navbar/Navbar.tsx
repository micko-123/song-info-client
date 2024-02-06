import { Link } from "react-router-dom";
import { Flex, Box, Text } from "rebass";
import { css } from "@emotion/react";

const navbarStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  background-color: cadetblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 20px;
  height: 60px;
`;

const logoStyle = css`
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(67, 61, 53);
  background-color: cadetblue;
`;

const navItemStyle = css`
  margin-left: 20px;
  cursor: pointer;
  color: rgb(67, 61, 53);
  font-size: 26px;
  font-weight: bolder;
  text-decoration: none;
  background-color: cadetblue;
`;

const Navbar = () => {
  return (
    <Flex css={navbarStyle}>
      <Link to="/">
        <Text as="h1" css={logoStyle}>
          SONGS
        </Text>
      </Link>
      <Flex className="navItems">
        <Link to="stats">
          <Text as="h2" css={navItemStyle}>
            STATS
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
