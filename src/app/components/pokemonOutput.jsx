"use client";

import usePokemonStore from "../utils/pokemonStore";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PokemonModal from "./pokemonModal";

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

export default function PokemonOutput() {
    const { pokemon, closePokemonCard, openModal } = usePokemonStore();

    if (!pokemon) return null;

    const primaryType = pokemon.types[0].type.name;
    const backgroundColor = typeColors[primaryType] || "#FFFFFF";

    return (
        <>
            <div className="pokemon-output">
                <div className="pokemon-image-box" style={{ backgroundColor }}>
                    <div className="pokemon-buttons-card-box">
                        <button
                            className="close-pokemon-card-button"
                            onClick={closePokemonCard}
                        >
                            <IoIosCloseCircleOutline size={24} />
                        </button>
                    </div>
                    <img
                        className="pokemon-image cursor-pointer"
                        src={pokemon.sprites.other.home.front_default}
                        alt={pokemon.name}
                        onClick={openModal}
                    />
                </div>
            </div>

            <PokemonModal />
        </>
    );
}
