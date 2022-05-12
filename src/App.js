import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';
const countryData= require("./data/db.json");



function App() {
  return (
    <>
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/city/:id' element= {<TourDetails />}/>
      </Routes>
    </>
  );
}

export default App;
