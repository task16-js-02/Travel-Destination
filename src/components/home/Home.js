import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import Tours from "../tours/Tours.js";




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



