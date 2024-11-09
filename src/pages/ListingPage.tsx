import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Flag, MapPin, Calendar } from 'lucide-react';

export function ListingPage() {
  const { id } = useParams();

  // TODO: Fetch listing data based on id
  const listing = {
    title: 'Sample Product',
    price: 299.99,
    description: 'This is a detailed description of the product...',
    location: 'New York, NY',
    createdAt: new Date(),
    images: [
      'https://source.unsplash.com/random/800x600?product',
      'https://source.unsplash.com/random/800x600?detail',
      'https://source.unsplash.com/random/800x600?closeup',
    ],
    seller: {
      name: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe',
      joinedDate: new Date(2023, 0, 1),
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {listing.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
                <img src={image} alt={`${listing.title} ${index + 2}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Listing Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
              <p className="text-2xl font-bold text-blue-600">${listing.price}</p>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart size={24} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 size={24} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Flag size={24} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <MapPin size={20} className="mr-1" />
              {listing.location}
            </div>
            <div className="flex items-center">
              <Calendar size={20} className="mr-1" />
              {listing.createdAt.toLocaleDateString()}
            </div>
          </div>

          <div className="border-t border-b py-6">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">{listing.description}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={listing.seller.avatar}
                alt={listing.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{listing.seller.name}</h3>
                <p className="text-sm text-gray-600">
                  Member since {listing.seller.joinedDate.toLocaleDateString()}
                </p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}