import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<Header />} />
      </Routes>

     
    </>
  );
}

export default NavBar;
