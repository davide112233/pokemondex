"use client";

import { Spinner } from "flowbite-react";

export default function LoadingPokemonsSpinner() {
    return (
        <div className="loading-spinner-box">
            <Spinner color="failure" size="xl" />
        </div>
    );
}