import Header from "../header/Header";
import Footer from "../footer/Footer.js";
//import Countrys from "../tours/Tours.js";
import Tours from "../tours/Tours.js";
//const countryData = require("../../data/db.json");



function Home(props) {
  return (

    <div>
     
     
      <Header/>
      <Tours Data={props.data} />

   
      <Footer />
    </div>
  );
}
export default Home;



