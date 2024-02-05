import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">Songs</div>
      </Link>
      <div className="navItems">
        <Link to="stats">
          <div className="navItem">Stats</div>
        </Link>
        <Link to="add-song">
          <div className="navItem">Add Song</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
