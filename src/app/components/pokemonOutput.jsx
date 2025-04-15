"use client";

import Image from "next/image";
import usePokemonStore from "../utils/pokemonStore";
import typeColors from "../utils/typeColors";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PokemonModal from "./pokemonModal";

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
                    <div onClick={openModal} className="pokemon-image-wrapper">
                        <Image
                            src={pokemon.sprites.other.home.front_default}
                            alt={pokemon.name}
                            width={200}
                            height={200}
                            className="pokemon-image"
                            unoptimized
                        />
                    </div>
                </div>
            </div>

            <PokemonModal />
        </>
    );
}
