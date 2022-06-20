import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../Cards/cards";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
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
    dispatch(getAllPokemons());
    setRenderPage(allPokemons);
    setCurrentPage(1);
    return () => {};
  }, []);

//-------------Filters---------------//






  return (
    <div>
      {allPokemons && allPokemons !== "NO POKEMONS HERE ONLY SOLITUDE" ? (
        <div className="Container">
            <div>
          <NavBar/>
          <SearchBar />
          </div>
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
                      types={p.types + " "}
                      id={p.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h3>ERROR 404</h3>
      )}
    </div>
  );
}
