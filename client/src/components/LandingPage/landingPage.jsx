import React from "react";
import { Link } from 'react-router-dom';
import landingBG from '../../utils/images/landingBG.jpg';
function LandingPage() {
    return (
        <div className="BG">
            <h3>Pokemone wolecome meow</h3>
            <img className="landingBG" src={landingBG} alt="errorrr landingBG"/>
            {/* <div className="enterLanding"> */}
                <Link to='/Home'>
                <button className="buttonEnterHome">Enter</button>
                </Link>
            {/* </div> */}
        </div>
    );
};


export default LandingPage;