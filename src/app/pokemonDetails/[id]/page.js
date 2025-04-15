"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import usePokemonStore from "@/app/utils/pokemonStore";
import typeColors from "@/app/utils/typeColors";
import LoadingPokemonsSpinner from "@/app/components/loadingSpinner";
import DOMPurify from "isomorphic-dompurify";

export default function PokemonDetails() {
    const { id } = useParams();
    const { fetchPokemonById, pokemon, loading, error } = usePokemonStore();

    useEffect(() => {
        fetchPokemonById(id);
    }, [id]);

    if (loading) return <LoadingPokemonsSpinner />
    if (error) return <div className="pokemon-loading-error-message">{error}</div>;
    if (!pokemon) return null;

    const bgColor = typeColors[pokemon.types[0]] || "#f4f4f4";

    return (
        <main id="pokemonDetails" style={{ backgroundColor: bgColor }}>
            <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pokemon.name) }} />
            <div className="pokemon-details-info">
                <div className="pokemon-image-details-box">
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="pokemon-info-box">
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pokemon.types.join(', ')) }} />
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pokemon.height / 10) }} />
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pokemon.weight / 10) }} />
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pokemon.abilities.join(', ')) }} />
                </div>
            </div>
        </main>
    );
}
