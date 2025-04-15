import { create } from 'zustand';

export const useSplashStore = create((set) => ({
    isSplashVisible: true,
    hideSplash: () => set({ isSplashVisible: false }),
}));
