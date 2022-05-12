import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1> Travel-Destination</h1>

      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav></nav>
    </>
  );
}

export default Header;
