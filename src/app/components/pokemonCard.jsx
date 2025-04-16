import { useEffect } from "react";
import usePokemonStore from "../utils/pokemonStore";
import DOMPurify from "isomorphic-dompurify";
import typeColors from "../utils/typeColors";
import PokemonPagination from "./pokemonPagination";
import { useRouter } from "next/navigation";
import LoadingPokemonsSpinner from "./loadingSpinner";
import Image from "next/image";

const PokemonGrid = () => {
    const { pokemons, fetchInitialPokemons, loading, error, currentPage, itemsPerPage } = usePokemonStore();

    useEffect(() => {
        fetchInitialPokemons();
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedPokemons = pokemons.slice(startIndex, startIndex + itemsPerPage);

    const router = useRouter();

    if (loading) return <LoadingPokemonsSpinner />;

    return (
        <div id="pokemonCardGrid">
            <div className="pokemon-grid">
                {paginatedPokemons.map((pokemon, index) => {
                    const primaryType = pokemon.types?.[0];
                    const bgColor = typeColors[primaryType] || "#dddddd";
                    const pokemonDetails = () => {
                        router.push(`/pokemonDetails/${pokemon.id}`);
                    };
                    return (
                        <div
                            key={pokemon.id}
                            className="pokemon-card-grid"
                            style={{ backgroundColor: bgColor }}
                        >
                            <h5
                                className="pokemon-card-name"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pokemon.name) }}
                            />
                            <div onClick={pokemonDetails} className="pokemon-card-image-wrapper">
                                <Image
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    width={150}
                                    height={150}
                                    className="pokemon-card-image"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <PokemonPagination />
            {error && (
                <p
                    className="pokemon-loading-error-message"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(error) }}
                />
            )}
        </div>
    );
};

export default PokemonGrid;
