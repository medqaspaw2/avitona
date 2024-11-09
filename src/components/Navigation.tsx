import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PlusCircle, User, Heart } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export function Navigation() {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Classifieds
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/new-listing"
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
            >
              <PlusCircle size={20} />
              <span>Post Ad</span>
            </Link>
            
            <Link to="/favorites" className="text-gray-600 hover:text-gray-700">
              <Heart size={20} />
            </Link>

            {isAuthenticated ? (
              <Link to="/profile" className="text-gray-600 hover:text-gray-700">
                <User size={20} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}