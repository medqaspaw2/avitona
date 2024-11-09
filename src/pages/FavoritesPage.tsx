import React from 'react';
import { useListingsStore } from '../store/useListingsStore';
import { Heart } from 'lucide-react';

export function FavoritesPage() {
  const { favorites } = useListingsStore();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Saved Listings</h1>
        <p className="text-gray-600">{favorites.size} items saved</p>
      </div>

      {favorites.size === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <Heart size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold mb-2">No saved listings yet</h2>
          <p className="text-gray-600">
            Items you save will appear here. Start browsing to find something you like!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Favorite listings will be rendered here */}
        </div>
      )}
    </div>
  );
}