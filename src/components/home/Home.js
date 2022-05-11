import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import Countrys from "../tours/Tours.js";
import Tour from "../tours/tour/Tour.js";
const countryData = require("../../data/db.json");

function Home(props) {
  return (
    <>
     
      <Header/>
      {/* {countryData.map((country) => {
        return <Countrys name={country.name} images={country.image} alt={country.id} />;
      })} */}

      <Tour tour={Countrys} /> 
      <Footer />
    </>
  );
}
export default Home;



