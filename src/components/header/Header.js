import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1> Travel-Destination</h1>
      <h1> we are in header</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="header">Header </Link>
      </nav>
    </>
  );
}

export default Header;

