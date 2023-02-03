import { Link } from "react-router-dom";
import logo from "./img/logo.png";
const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between">
      <img src={logo} width={407} height={150} />
      <div>
        <Link className="mx-2" to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link
          className="mx-2"
          to="/favorites"
          style={{ textDecoration: "none" }}
        >
          Favorite
        </Link>
        <Link
          className="mx-2 no-underline"
          to="/search"
          style={{ textDecoration: "none" }}
        >
          Search
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;