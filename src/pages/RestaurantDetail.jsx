import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockRestaurants } from '../api/mockData';
import Header from '../components/Header';

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = mockRestaurants.find((r) => r.id === id);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: restaurant.name,
        text: `Check out ${restaurant.name}! Rated ${restaurant.rating}/5.`,
        url: window.location.href,
      });
    } catch {
      alert('Sharing not supported on this browser.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img
            src={restaurant.imageURL}
            alt={restaurant.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
            <p className="text-gray-500 mb-2">{restaurant.address}</p>
            <p className="text-yellow-600 font-semibold mb-4">
              ⭐ {restaurant.rating} / 5
            </p>
            <button
              onClick={handleShare}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Share
            </button>
            <button
              onClick={() => navigate('/restaurants')}
              className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
