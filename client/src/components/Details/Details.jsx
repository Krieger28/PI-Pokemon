import React, { useEffect } from "react";
import { getPokemonByID } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import img from "../../utils/images/mewww.gif";
import GP from "../../utils/images/waving_pchita1_sillhouette.png";
import "./Details.css";

// import detailsimg from "../../utils/images/detailsimg.jpg"
// <img className="backgroundCard" src={detailsimg} alt="aaaaaa"/>

export default function Details() {
  const dispatch = useDispatch();
  const pokeDetail = useSelector((state) => state.pokemon);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonByID(id));
  }, [dispatch, id]);

  return (
    <div className="backgroundCard">
      <div>
        {pokeDetail.length > 0 ? (
          <div className="ContainerDetails">
            {/* {pokeDetail[0].id} in case theres need to show the entire id*/}
            <h3 className="PokeID">
              ID:{" "}
              {pokeDetail[0].id.length > 5
                ? pokeDetail[0].id.slice(0, 3)
                : pokeDetail[0].id}
            </h3>
            <h3 className="PokeName">{pokeDetail[0].name}</h3>
            {pokeDetail[0].sprite ? (
              <img className="imgPoke" src={pokeDetail[0].sprite} alt="pollo" />
            ) : (
              <img className="imgPoke" src={GP} alt="POLLO" />
            )}
            <h3 className="types">
              TYPES:{" "}
              {pokeDetail[0].id.length > 5
                ? pokeDetail[0].types.map((type) => type.name + " ")
                : pokeDetail[0].types + " "}
            </h3>
            {console.log(pokeDetail[0].types)}
            <div className="statsData">
              <div className="twostats">
                <h3>HP: {pokeDetail[0].hp}</h3>
                <h3>ATK: {pokeDetail[0].attack}</h3>
              </div>
              <div>
                <h3>DEF: {pokeDetail[0].defense}</h3>
                <h3>SPD: {pokeDetail[0].speed}</h3>
              </div>
            </div>
            <div className="otherData">
              <h3>HT: {pokeDetail[0].height}</h3>
              <h3>WT: {pokeDetail[0].weight}</h3>
            </div>
            <Link to={"/home"}>
              <button className="buttonGoBack">Back</button>
            </Link>
          </div>
        ) : (
          <div className="ContainerDetails">
            <h3 className="PokeID">ID: ???</h3>
            <h3 className="PokeName">████████</h3>
            <img className="imgPoke" src={img} alt="not found" />
            <h3 className="types">TYPES: ████████</h3>
            <div className="statsData">
              <div className="twostats">
                <h3>HP: ???</h3>
                <h3>ATK: ???</h3>
              </div>
              <h3>DEF: ???</h3>
              <h3>SPD: ???</h3>
            </div>
            <div className="otherData">
              <h3>HT: ???</h3>
              <h3>WT: ???</h3>
            </div>
            <Link to={"/home"}>
              <button className="buttonGoBack">Back</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
