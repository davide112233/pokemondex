import { create } from 'zustand';
import axios from 'axios';

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
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            const promises = res.data.results.map(async (pokemon) => {
                const details = await axios.get(pokemon.url); // fetch full Pokémon data
                return {
                    name: details.data.name,
                    id: details.data.id,
                    image: details.data.sprites.other['home'].front_default, // proper image from API
                };
            });
            const pokemons = await Promise.all(promises);
            set({ pokemons, loading: false });
        } catch (err) {
            set({ error: 'Failed to load Pokémon', pokemons: [], loading: false });
        }
    },

    closePokemonCard: () => set({ pokemon: null, search: '', showModal: false }),
}));

export default usePokemonStore;
