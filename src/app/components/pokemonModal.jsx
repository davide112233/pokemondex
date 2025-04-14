"use client";

import usePokemonStore from "../utils/pokemonStore";

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

export default function PokemonModal() {
    const { pokemon, showModal, closeModal } = usePokemonStore();

    if (!showModal || !pokemon) return null;

    const primaryType = pokemon.types[0].type.name;
    const backgroundColor = typeColors[primaryType] || "#FFFFFF";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="rounded-xl p-6 text-white shadow-lg w-80 max-h-[90vh] overflow-y-auto"
                style={{ backgroundColor }}
            >
                <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>
                <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={pokemon.name}
                    className="mx-auto mb-4 w-32 h-32 object-cover"
                />
                <ul className="space-y-2">
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name} className="flex justify-between">
                            <span className="capitalize">{stat.stat.name}</span>
                            <span>{stat.base_stat}</span>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-6 bg-white text-white px-4 py-2 rounded hover:bg-gray-100 w-full"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
