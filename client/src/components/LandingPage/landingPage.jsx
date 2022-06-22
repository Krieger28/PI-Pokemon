import React from "react";
import { Link } from "react-router-dom";
import landingBG from "../../utils/images/landingBG.jpg";
import welcome from "../../utils/images/welcome.png";
import pokemon from "../../utils/images/pokemon.png";
import pokeball from "../../utils/images/staticPokeball.png";
import activeball from "../../utils/images/gifPokeball.gif";
import "./landingPage.css";
function LandingPage() {
  return (
    <div className="BG">
      <div>
        <img className="landingBG" src={landingBG} alt="errorrr landingBG" />
      </div>
      <div className="merge">
        <img className="Pokemonpng" src={pokemon} alt="errrorrr" />
        <img className="Welcomepng" src={welcome} alt="come" />
      </div>
      <div className="enterLanding">
      </div>
        <Link to="/Home">
            <div className="mergePokes">
          
          <img className="activebutton" src={activeball} alt="404"></img>
          <img className="pokeButton" src={pokeball} alt="404"></img>
          </div>
        </Link>
      
    </div>
  );
}

export default LandingPage;
