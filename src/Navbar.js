import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between" >
      <h1> The Pokedex</h1>
      <div>
        <Link className="mx-2" to='/' style={{ textDecoration: 'none' }}>Home</Link>
        <Link className="mx-2" to='/favorites' style={{ textDecoration: 'none' }}>Favorite</Link>
        <Link className="mx-2 no-underline" to='/search' style={{ textDecoration: 'none' }}>Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;