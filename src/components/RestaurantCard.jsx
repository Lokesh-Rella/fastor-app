import React from 'react';

export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
      onClick={onClick}
    >
      <img
        src={restaurant.imageURL}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{restaurant.name}</h2>
        <p className="text-gray-500 text-sm">{restaurant.address}</p>
        <p className="text-yellow-600 font-medium mt-1">
          ⭐ {restaurant.rating} / 5
        </p>
      </div>
    </div>
  );
}
