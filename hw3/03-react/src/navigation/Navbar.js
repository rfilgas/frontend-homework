import { Route, Routes, Link } from "react-router-dom";
import Home from "./../views/Home";
import Search from "./../views/Search";
import Houses from "./../views/Houses";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar">
          <li className="nav-link mx-2 p-3">{<Link to="/">Home</Link>}</li>
          <li className="nav-link mx-2 p-3">
            {<Link to="/search">Search</Link>}
          </li>
          <li className="nav-link mx-2 p-3">
            {<Link to="/houses">Houses</Link>}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home title="Welcome to GoT!" />} />
        <Route path="/search" element={<Search title="Search a Character" />} />
        <Route
          path="/houses"
          element={<Houses title="Game of Thrones Houses" />}
        />
      </Routes>
    </div>
  );
}

export default Navbar;
