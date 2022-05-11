import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="city/:id" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
