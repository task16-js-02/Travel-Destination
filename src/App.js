import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import TourDetails from "../src/components/TourDetails/TourDetails";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
        {/* <city> </city> */}
      </Routes>
    </>
      
   
  );
}

export default App;
