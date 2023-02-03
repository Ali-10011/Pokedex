import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className="text-center ">
        <img src={logo} width={407} height={150} alt="Pokemon logo" />
      </div>
      <div className="position-absolute top-0 end-0">
        <Link className="mx-2" to="/" style={{ textDecoration: "none" }}>
          <button className="btn border btn-md mx-1 my-1 btn-danger btn-outline-light">
            Home
          </button>
        </Link>
        <Link
          className="mx-2"
          to="/favorites"
          style={{ textDecoration: "none" }}
        >
          <button className="btn border btn-md mx-1 my-5 btn-danger btn-outline-light">
            Favorite
          </button>
        </Link>
        <Link
          className="mx-2 no-underline"
          to="/search"
          style={{ textDecoration: "none" }}
        >
          <button className="btn border btn-md  mx-1  my-5 btn-danger btn-outline-light">
            Search
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;