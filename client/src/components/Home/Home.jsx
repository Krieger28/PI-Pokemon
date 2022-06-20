import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../Cards/cards";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";

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

  useEffect(() => {
    dispatch(getAllPokemons());
    setRenderPage(allPokemons);
    setCurrentPage(1);
    return () => {};
  }, [dispatch]);

  return (
    <div className="Container">
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
  );
}
