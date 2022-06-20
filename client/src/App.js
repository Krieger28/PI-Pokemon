import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Pokemons/:id" element={<Details />} />
            <Route path="/Create" element={<sdfdfd />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
