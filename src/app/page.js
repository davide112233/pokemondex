"use client";

import PokemonOutput from "./components/pokemonOutput";
import SearchForm from "./components/searchForm";
import usePokemonStore from "./utils/pokemonStore";

export default function Home() {
  const { pokemon, loading, error } = usePokemonStore();

  return (
    <main>
      <SearchForm />
      {pokemon && !loading && (
        <PokemonOutput />
      )}
    </main>
  );
}