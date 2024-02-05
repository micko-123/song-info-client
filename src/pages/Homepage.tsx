import Form from "../components/Form/Form";
import Songs from "../components/Songs/Songs";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="home">
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
