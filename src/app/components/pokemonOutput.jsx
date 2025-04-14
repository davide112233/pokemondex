import usePokemonStore from "../utils/pokemonStore";

export default function PokemonOutput() {
    const { pokemon } = usePokemonStore();

    return (
        <div className="pokemon-output">
            <div className="pokemon-image-box">
                <img className="pokemon-image" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
            </div>
        </div>
    );
}