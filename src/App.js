import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home.js';
import Countrys from './components/tours/Tours.js';

const countryData = require("./data/db.json");

function App() {
  return (
  <> 

  {
    countryData.map(country => {
      return (
        <Countrys  name={country.name} images1={country.image}/>

      )


      
    }) 
  }


<Home/>

  </>
  );
}

export default App;
