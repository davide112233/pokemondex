"use client";

import { Button } from "flowbite-react";
import usePokemonStore from "../utils/pokemonStore";
import typeColors from "../utils/typeColors";
import { IoIosCloseCircleOutline } from "react-icons/io";
import DOMPurify from "isomorphic-dompurify";

export default function PokemonModal() {
    const { pokemon, showModal, closeModal } = usePokemonStore();

    if (!showModal || !pokemon) return null;

    const primaryType = pokemon.types[0].type.name;
    const backgroundColor = typeColors[primaryType] || "#FFFFFF";

    return (
        <div className="modal">
            <div
                className="inner-modal"
                style={{ backgroundColor }}
            >
                <div className="modal-header">
                    <h2 className="pokemon-modal-title">{pokemon.name}</h2>
                    <Button className="pokemon-modal-close-button" onClick={closeModal}><IoIosCloseCircleOutline /></Button>
                </div>
                <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={pokemon.name}
                    className="pokemon-modal-image"
                />
                <ul className="pokemon-modal-list">
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name} className="pokemon-modal-list-item">
                            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(stat.stat.name) }} />
                            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(stat.base_stat) }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
