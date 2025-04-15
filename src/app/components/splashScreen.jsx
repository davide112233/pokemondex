'use client';

import { useEffect } from 'react';
import { useSplashStore } from '../utils/splashStore';
import LoadingPokemonsSpinner from './loadingSpinner';

export default function SplashScreen() {
    const { isSplashVisible, hideSplash } = useSplashStore();

    useEffect(() => {
        const timeout = setTimeout(() => {
            hideSplash();
        }, 2000);
        return () => clearTimeout(timeout);
    }, [hideSplash]);

    if (!isSplashVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-center text-xl font-bold">
            <LoadingPokemonsSpinner />
        </div>
    );
}
