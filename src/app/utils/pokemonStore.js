import { create } from 'zustand';
import axios from 'axios';

const usePokemonStore = create((set) => ({
    search: '',
    setSearch: (value) => set({ search: value }),

    pokemon: null,
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

    closePokemonCard: () => set({ pokemon: null, search: '', showModal: false }),
}));

export default usePokemonStore;
