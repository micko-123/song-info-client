import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">SONGS</h1>
      </Link>
      <div className="navItems">
        <Link to="stats">
          <h2 className="navItem">STATS</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
