import { useState } from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import { getPokemon, fetchPokemonDataByName } from "../api/fetchPokemon";
import Loading from "./Loading";

import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const Pokemon = () => {
  const [activePage, setActivePage] = useState(1);

  // get all pokemon
  const { data: pages, isLoading } = useQuery({
    queryKey: ["pokemonData"],
    queryFn: () => getPokemon(),
    keepPreviousData: true,
  });

  //get data of each pokemon
  const singlePokemonData = useQueries({
    queries: (pages?.[activePage - 1] ?? []).map((pokemon) => {
      return {
        queryKey: [pokemon.name],
        queryFn: () => fetchPokemonDataByName(pokemon.name),
      };
    }),
  });

  //check if each pokemon data is loaded
  const isStatusSuccess = (element) => element.status == "success";

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={pages}
      />

      <div className="pokemon-grid">
        {singlePokemonData.every(isStatusSuccess) ? (
          singlePokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.data.name} data={pokemon.data} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Pokemon;
