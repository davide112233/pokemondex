"use client";

import NavigationBar from "../components/navigationBar";
import PokemonOutput from "../components/pokemonOutput";
import SearchForm from "../components/searchForm";
import usePokemonStore from "../utils/pokemonStore";

export default function Search() {
    const { pokemon, loading, error } = usePokemonStore();

    return (
        <>
            <NavigationBar />
            <main>
                <SearchForm />
                {pokemon && !loading && (
                    <PokemonOutput />
                )}
            </main>
        </>
    );
}
