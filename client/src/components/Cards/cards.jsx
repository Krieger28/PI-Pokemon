import React from "react";
//import cardscss from "cardcsspinga";
//import imgcardBG from "pinga";

export default function Cards({ name, img, types }) {
  return (
    <div className="Cards">
      <div className="dataCards">
        <img className="img" src={img} alt="error img" />
        <h3 className="cardName">{name}</h3>
        <h3 className="cardTypes">Types: {types}</h3>
      </div>
    </div>
  );
}
