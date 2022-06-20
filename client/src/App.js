import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Home" element={<eefdf />} />
            <Route path="/Pokemons/:id" element={<fdsfdf />} />
            <Route path="/Create" element={<sdfdfd />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
