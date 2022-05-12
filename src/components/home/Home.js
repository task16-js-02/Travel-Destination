import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import Countrys from "../tours/Tours.js";
import Tour from "../tours/tour/Tour.js";
import Button from "../TourDetails/TourDetails.js";
const countryData = require("../../data/db.json");

function Home(props) {
  return (
    <div>
      <Header />
      {/* <Button /> */}

      <Tour tour={Countrys} />

      <Footer />
    </div>
  );
}
export default Home;
