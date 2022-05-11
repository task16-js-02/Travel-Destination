import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import Countrys from "../tours/Tours.js";
import Tour from "../tours/tour/Tour.js";
const countryData = require("../../data/db.json");


import {Link} from "react-router-dom"
function Home(props) {
  return (

    <div>
     
     
      <Header/>
      {countryData.map((country) => {
        return <Countrys key = {country.id}name={country.name}   images={country.image}  alt={country.id}    />;
        
      })}
{/* {  console.log(key)} */}
      {/* <Tour tour={Countrys} />  */}
   
      <Footer />
    </div>
  );
}
export default Home;



