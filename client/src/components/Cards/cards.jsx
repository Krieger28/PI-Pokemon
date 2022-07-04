import React from "react";
import "./cards.css";
import GP from "../../utils/images/waving_pchita1_sillhouette.png";

export default function Cards({ id, name, img, types }) {
  const dbtypes =
    typeof types[0] === "string"
      ? types.map((type) => type + " ")
      : types.map((type) => type.name + " ");
  const apitypes = types.map((type) => type + " ");
  return (
    <div className="Cards">
      <div className="dataCards">
        {img ? (
          <img className="img" src={img} alt="pollo" />
        ) : (
          <img className="img" src={GP} alt="POLLO" />
        )}
        <h3 className="cardName">{name}</h3>
        <h3 className="cardTypes">
          Types: {id.length > 5 ? dbtypes : apitypes}
        </h3>
      </div>
    </div>
  );
}
