import React from 'react';
import { useListingsStore } from '../store/useListingsStore';
import { Sliders, Search } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 -mx-4 -mt-8 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Find Anything You Need</h1>
          <p className="text-xl mb-8">Discover great deals in your local community</p>
          <div className="flex gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50">
              <Sliders size={20} />
              Filters
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Listings</h2>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Vehicles</option>
              <option>Furniture</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300">
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Placeholder cards for now */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={`https://source.unsplash.com/random/400x300?marketplace&sig=${i}`}
                  alt="Product"
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Sample Product {i}</h3>
                <p className="text-gray-600 text-sm mb-2">Category</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${(Math.random() * 1000).toFixed(2)}</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}