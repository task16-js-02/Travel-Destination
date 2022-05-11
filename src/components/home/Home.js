import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import Countrys from "../tours/Tours.js";
const countryData = require("../../data/db.json");

function Home(props) {
  return (
    <>
      <h1>we are home</h1>
      <Header/>
      {countryData.map((country) => {
        return <Countrys name={country.name} images={country.image} alt={country.id} />;
      })}
      
      <Footer />
    </>
  );
}
export default Home;
