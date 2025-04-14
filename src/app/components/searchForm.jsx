'use client';

import { useEffect, useRef } from 'react';
import { Button } from 'flowbite-react';
import usePokemonStore from '../utils/pokemonStore';
import DOMPurify from "isomorphic-dompurify";

export default function SearchForm() {
    const { search, setSearch, fetchPokemon, pokemon } = usePokemonStore();
    const inputRef = useRef(null);

    const handleSearch = async () => {
        if (search.trim() !== '') {
            await fetchPokemon(search);
            setSearch('');
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

    useEffect(() => {
        if (!pokemon && inputRef.current) {
            inputRef.current.focus();
        }
    }, [pokemon]);

    return (
        <div className="search-form-box">
            <form className="search-pokemon-form" autoComplete='off' onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    required
                    placeholder={DOMPurify.sanitize("type the pokemon")}
                />
                <div className="search-pokemon-button-box">
                    <Button
                        type="submit"
                        className='search-pokemon-button'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize("search") }}
                    />
                </div>
            </form>
        </div>
    );
}
