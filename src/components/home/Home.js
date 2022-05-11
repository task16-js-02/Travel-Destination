import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
<<<<<<< HEAD
import Countrys from "../tours/Tours.js";
const countryData = require("../../data/db.json");
=======
import tourData from "../../data/db.json";
// const tourData = require("./data/db.json");
>>>>>>> class-16murad

function Home(props) {
  return (
    <>
      <h1></h1>
      <Header />
<<<<<<< HEAD
      {countryData.map((country) => {
        return <Countrys name={country.name} images={country.image} alt={country.id} />;
      })}
      
=======
{
 tourData.map(tour=>{
     return (
         <Tours name={tour.name}  image={tour.image}/>
     )
 })
}
>>>>>>> class-16murad
      <Footer />
    </>
  );
}
export default Home;
