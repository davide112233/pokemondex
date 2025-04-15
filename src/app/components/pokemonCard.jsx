import { useEffect } from "react";
import usePokemonStore from "../utils/pokemonStore";
import { Card } from "flowbite-react";
import DOMPurify from "isomorphic-dompurify";

const PokemonGrid = () => {
    const { pokemons, fetchInitialPokemons, loading } = usePokemonStore();

    useEffect(() => {
        fetchInitialPokemons();
    }, []);

    const loadingPokemon = "loading pokemon";

    if (loading) return <p className="loading-pokemon-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(loadingPokemon) }} />;

    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    className="pokemon-grid-card"
                >
                    <h5 className="pokemon-card-name">
                        {pokemon.name}
                    </h5>
                    <img src={pokemon.image} alt={pokemon.name} className="pokemon-card-image" />
                </Card>
            ))}
        </div>
    );
};

export default PokemonGrid;
