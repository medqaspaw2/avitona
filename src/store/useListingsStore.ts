import { create } from 'zustand';
import type { Listing } from '../types';

interface ListingsState {
  listings: Listing[];
  favorites: Set<string>;
  addListing: (listing: Listing) => void;
  removeListing: (id: string) => void;
  toggleFavorite: (id: string) => void;
}

export const useListingsStore = create<ListingsState>((set) => ({
  listings: [],
  favorites: new Set(),
  addListing: (listing) =>
    set((state) => ({ listings: [...state.listings, listing] })),
  removeListing: (id) =>
    set((state) => ({
      listings: state.listings.filter((listing) => listing.id !== id),
    })),
  toggleFavorite: (id) =>
    set((state) => {
      const newFavorites = new Set(state.favorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return { favorites: newFavorites };
    }),
}));