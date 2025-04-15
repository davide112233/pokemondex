"use client";

import { Pagination } from "flowbite-react";
import usePokemonStore from "../utils/pokemonStore";

const PokemonPagination = () => {
    const { pokemons, currentPage, setCurrentPage, itemsPerPage } = usePokemonStore();

    const totalPages = Math.ceil(pokemons.length / itemsPerPage);

    const onPageChange = (page) => setCurrentPage(page);

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center mt-4">
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                showIcons
            />
        </div>
    );
};

export default PokemonPagination;
