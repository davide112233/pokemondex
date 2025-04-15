"use client";

import NavigationBar from "./components/navigationBar";
import PokemonGrid from "./components/pokemonCard";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <PokemonGrid />
    </main>
  );
}