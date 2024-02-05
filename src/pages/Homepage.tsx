import { useSelector } from "react-redux";
import Dropdown from "../components/Dropdown/Dropdown";
import Form from "../components/Form/Form";
import Songs from "../components/Songs/Songs";
import "./homepage.css";
import { Song } from "../types";

const Homepage = () => {
  const songs: Song[] = useSelector((state) => state.songs);

  return (
    <div className="home">
      <div className="filter">
        {/* <Dropdown
          options={songs}
          onSelect={() => {
            console.log("ds");
          }}
        /> */}
      </div>
      <div className="songList">
        <Songs />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};

export default Homepage;
