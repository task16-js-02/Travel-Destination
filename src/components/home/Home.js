import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Countrys from "../tours/Tours.js";
const countryData = require("../../data/db.json");

function Home(props) {
  return (
    <>
      <h1></h1>

      {countryData.map((country) => {
        return <Countrys name={country.name} images1={country.image} />;
      })}
      <Header />
      <Footer />
    </>
  );
}
export default Home;
