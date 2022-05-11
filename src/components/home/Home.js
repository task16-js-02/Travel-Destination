
import Tours from "../tours/Tours.js";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import tourData from "/home/murad/Travel-des/traveldest/src/data/db.json";
// const tourData = require("./data/db.json");

function Home(props) {
  return (
    <>
      <h1>Here were we start againe</h1>
      <Header />
{
 tourData.map(tou=>{
     return (
         <Tours name={tou.name}  image={tou.image}/>
     )
 })
}
      <Footer />
    </>
  );

}
export default Home;
