
import Tours from "../tours/Tours.js";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import tourData from "../../data/db.json";
// const tourData = require("./data/db.json");

function Home(props) {
  return (
    <>
      <h1>Here were we start againe</h1>
      <Header />
{
 tourData.map(tour=>{
     return (
         <Tours name={tour.name}  image={tour.image}/>
     )
 })
}
      <Footer />
    </>
  );

}
export default Home;
