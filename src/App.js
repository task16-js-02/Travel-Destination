import './App.css';
import Home from './components/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';
const countryData=require("./data/db.json");

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home data={countryData}  />}/>
      <Route path='/city/:id' element= {<TourDetails data={countryData} />}/>
    </Routes>
    
    </>
  );
}

export default App;