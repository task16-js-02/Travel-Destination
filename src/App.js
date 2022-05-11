import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home.js";
//import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Home />
      <h1>Welcome to React Router!</h1>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
