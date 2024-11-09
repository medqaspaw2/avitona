import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Settings, LogOut } from 'lucide-react';

export function ProfilePage() {
  const { user, logout } = useAuthStore();

  if (!user) {
    return (
      <div className="text-center py-12">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
              alt={user.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Settings size={20} />
              <span>Settings</span>
            </button>
            <button
              onClick={() => logout()}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">My Listings</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 text-center">You haven't posted any listings yet.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <p className="font-medium">{user.email}</p>
              </div>
              {user.phone && (
                <div>
                  <label className="block text-sm text-gray-600">Phone</label>
                  <p className="font-medium">{user.phone}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}