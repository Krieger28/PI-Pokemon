import React, { useEffect } from "react";
import { getPokemonByID } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import img from "../../utils/images/mewww.gif";

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
        {/* <img className="" src={} alt="missing data"/> */}
        {pokeDetail.length > 0 ? (
          <div className="ContainerDetails">
            <h3 className="PokeID">ID: {pokeDetail[0].id}</h3>
            <h3 className="PokeName">{pokeDetail[0].name}</h3>
            <img className="imgPoke" src={pokeDetail[0].sprite} />
            <h3>TYPES: {pokeDetail[0].types + " "}</h3>
            <div className="statsData">
              <h3>ATK: {pokeDetail[0].attack}</h3>
              <h3>DEF: {pokeDetail[0].defense}</h3>
              <h3>SPD: {pokeDetail[0].speed}</h3>
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
            <img className="imgPoke" src={img} />
            <h3>TYPES: ████████</h3>
            <div className="statsData">
              <h3>ATK: ???</h3>
              <h3>DEF: ???</h3>
              <h3>SPD: ???</h3>
            </div>
            <div className="otherData">
              <h3>HT: ???</h3>
              <h3>WT: ???</h3>
            </div>
            <Link to={"/home"}>
              <button className="buttonGoBack">Go Back!!!</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
