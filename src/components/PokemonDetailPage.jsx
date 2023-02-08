import { useQuery, useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchPokemonDataByName, getInfosByURL } from "../api/fetchPokemon";
import Loading from "./Loading";

import PokemonDetailPageInfo from "./PokemonDetailPageInfo";

const PokemonDetailPage = () => {
  const { pokemon } = useParams();

  //get data of pokemon
  const { data: pokemonData, isLoading } = useQuery({
    queryKey: [pokemon],
    queryFn: () => fetchPokemonDataByName(pokemon),
    keepPreviousData: true,
  });

  const abilities = useQueries({
    queries: (pokemonData?.abilities ?? []).map((ability) => {
      return {
        queryKey: [ability.ability.name],
        queryFn: () => getInfosByURL(ability.ability.url),
      };
    }),
  });

  const moves = useQueries({
    queries: (pokemonData?.moves ?? []).map((move) => {
      return {
        queryKey: [move.move.name],
        queryFn: () => getInfosByURL(move.move.url),
      };
    }),
  });

  //check if each data is loaded
  const isStatusSuccess = (element) => element.status == "success";

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {abilities.every(isStatusSuccess) && moves.every(isStatusSuccess) ? (
        <PokemonDetailPageInfo
          data={pokemonData}
          abilities={abilities}
          moves={moves}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PokemonDetailPage;
