import { create } from 'zustand';
import axios from 'axios';

const currentPage = 1;
const pokemonNumber = 1025;
const pokemonPerPage = 151;

const usePokemonStore = create((set) => ({
    search: '',
    setSearch: (value) => set({ search: value }),

    pokemon: null,
    pokemons: [],
    loading: false,
    error: null,

    showModal: false,
    openModal: () => set({ showModal: true }),
    closeModal: () => set({ showModal: false }),

    currentPage: currentPage,
    itemsPerPage: pokemonPerPage,
    setCurrentPage: (page) => set({ currentPage: page }),

    fetchPokemon: async (name) => {
        set({ loading: true, error: null });
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            set({ pokemon: res.data, loading: false });
        } catch (err) {
            set({ error: 'Pokémon not found', pokemon: null, loading: false });
        }
    },

    fetchInitialPokemons: async () => {
        set({ loading: true, error: null });
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}`);
            const promises = res.data.results.map(async (pokemon) => {
                const details = await axios.get(pokemon.url);
                return {
                    name: details.data.name,
                    id: details.data.id,
                    image: details.data.sprites.other['home'].front_default,
                    types: details.data.types.map(t => t.type.name),
                };
            });
            const pokemons = await Promise.all(promises);
            set({ pokemons, loading: false });
        } catch (err) {
            set({ error: 'Failed to load Pokémon', pokemons: [], loading: false });
        }
    },

    fetchPokemonById: async (id) => {
        set({ loading: true, error: null });
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            set({
                pokemon: {
                    name: res.data.name,
                    id: res.data.id,
                    image: res.data.sprites.other['home'].front_default,
                    types: res.data.types.map((t) => t.type.name),
                    height: res.data.height,
                    weight: res.data.weight,
                    abilities: res.data.abilities.map(a => a.ability.name),
                },
                loading: false,
            });
        } catch (err) {
            set({
                error: "Failed to fetch Pokémon details.",
                pokemon: null,
                loading: false,
            });
        }
    },

    closePokemonCard: () => set({ pokemon: null, search: '', showModal: false }),
}));

export default usePokemonStore;
