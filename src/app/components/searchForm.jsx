'use client';

import { Button } from 'flowbite-react';
import usePokemonStore from '../utils/pokemonStore';
import DOMPurify from "isomorphic-dompurify";

export default function SearchForm() {
    const { search, setSearch, fetchPokemon } = usePokemonStore();

    const handleSearch = () => {
        if (search.trim() !== '') {
            fetchPokemon(search);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    const searchPokemonPlaceholder = "type the pokemon";
    const searchPokemonButton = "search";

    return (
        <div className="search-form-box">
            <form className="search-pokemon-form" autoComplete='off' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    required
                    placeholder={DOMPurify.sanitize(searchPokemonPlaceholder)}
                />
                <div className="search-pokemon-button-box">
                    <Button type="submit" className='search-pokemon-button' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(searchPokemonButton) }} />
                </div>
            </form>
        </div>
    );
}
