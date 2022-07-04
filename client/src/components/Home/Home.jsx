import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypes,
  getAllPokemons,
  filterByApiOrDb,
  filterByAttack,
  filterByName,
  filterByTypes,
} from "../../redux/actions";
import Cards from "../Cards/cards";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import HomeBG from "../../utils/images/HomeBG.jpg";
import error404 from "../../utils/images/error404.png";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const [renderPage, setRenderPage] = useState();
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentPokemon = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  //-------------UseEffect---------------//

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
    setRenderPage(allPokemons);
    setCurrentPage(1);
  }, [dispatch, getAllPokemons]);

  //-------------handle---------------//

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllPokemons());
    var dropDownOne = document.getElementById("valueFiltersAt");
    dropDownOne.selectedIndex = "default";

    var dropDownTwo = document.getElementById("valueFiltersAZ");
    dropDownTwo.selectedIndex = "default";

    var dropDownThree = document.getElementById("valueFiltersType");
    dropDownThree.selectedIndex = "default";

    var dropDownFour = document.getElementById("valueFiltersADB");
    dropDownFour.selectedIndex = "default";
  }

  function handleFilterByAttack(e) {
    e.preventDefault();
    dispatch(filterByAttack(e.target.value));
    setRenderPage(e.target.value);
  }

  function handleFilterByName(e) {
    e.preventDefault();
    console.log(allPokemons);
    dispatch(filterByName(e.target.value));
    console.log(allPokemons);
    setRenderPage(e.target.value);
  }
  function handleFilterByTypes(e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    setRenderPage(e.target.value);
  }

  function handleFilterByApiOrDb(e) {
    e.preventDefault();
    dispatch(filterByApiOrDb(e.target.value));
    setRenderPage(e.target.value);
  }

  return (
    <div>
      <img className="HomeBG" src={HomeBG} alt="pfege" />
      {allPokemons && allPokemons !== "NO POKEMONS HERE ONLY SOLITUDE" ? (
        <div className="Container">
          <div>
            <NavBar />
            <SearchBar />
            <div className="ruleroffilters">
              <div className="divAllFilters">
                <div className="filtros">
                  <select
                    id="valueFiltersAZ"
                    className="selectFiltros"
                    onChange={(e) => handleFilterByName(e)}
                  >
                    <option value="default" hidden>
                      -Alphabetic Selection-
                    </option>
                    <option value="A-Z"> A-Z </option>
                    <option value="Z-A"> Z-A </option>
                  </select>
                </div>
                <div className="filtros">
                  <select
                    id="valueFiltersType"
                    autoComplete="off"
                    className="selectFiltros"
                    onChange={(e) => handleFilterByTypes(e)}
                  >
                    <option defaultValue="-Selección De Tipos-" hidden>
                      -Select Types-
                    </option>
                    <option value="Todos">All </option>
                    {types &&
                      types.map((poketypes) => (
                        <option value={poketypes} key={poketypes}>
                          {poketypes}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="filterContainer">
                <div className="filtros">
                  <select
                    id="valueFiltersAt"
                    autoComplete="off"
                    className="selectFiltros"
                    onChange={(e) => handleFilterByAttack(e)}
                  >
                    <option
                      defaultValue="-Mayor/Menor Ataque-"
                      value="default"
                      hidden
                    >
                      -High/Low Attack-
                    </option>
                    <option value="ascendente"> Highest ATK </option>
                    <option value="descendente"> Lowest ATK </option>
                  </select>
                </div>
                <div className="filtros">
                  <select
                    id="valueFiltersADB"
                    autoComplete="off"
                    className="selectFiltros"
                    onChange={(e) => handleFilterByApiOrDb(e)}
                  >
                    <option
                      defaultValue="-Existentes/Creados-"
                      value="default"
                      hidden
                    >
                      -API/Created-
                    </option>
                    <option value="Todos"> All </option>
                    <option value="API"> API </option>
                    <option value="Database"> Created </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            <Pagination
              className="pagination"
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={allPokemons?.length}
              pagination={pagination}
            />
          </div>

          <div className="CardContainer">
            {currentPokemon?.map((p) => {
              return (
                <div>
                  <Link className="LinkCard" to={`/pokemons/${p.id}`}>
                    <Cards
                      className="Cards"
                      key={p.id}
                      name={p.name}
                      img={p.sprite}
                      types={p.types}
                      id={p.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Link className="linkCss" to="/Home">
          <img className="error" src={error404} alt="dwds" />
        </Link>
      )}
    </div>
  );
}
