import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Create" element={<Create />} />
            <Route path="/Pokemons/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;