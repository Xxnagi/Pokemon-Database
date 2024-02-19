"use client";
import Link from "next/link";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { getAllPokemon } from "../config/api";
import Skeleton from "./Skeleton";
import { setLoading, setPokemons } from "../redux/slices/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const loading = useSelector((state) => state.pokemon.loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemon(page);
      dispatch(setPokemons(data));
      dispatch(setLoading(false));
    };
    fetchData();
  }, [page]);

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage(page + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    scrollTop();
  };

  return (
    <>
      {loading ? (
        <Skeleton type="card" />
      ) : (
        <>
          <div className="p-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-7">
            {pokemons.results.map((pokemon) => (
              <Link href={`/details/${pokemon.name}`} key={pokemon.name}>
                <PokemonCard
                  pokemon={pokemon}
                  name={pokemon.name}
                  id={pokemon.id}
                />
              </Link>
            ))}
          </div>
          <Pagination
            page={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
    </>
  );
};

export default PokemonList;
