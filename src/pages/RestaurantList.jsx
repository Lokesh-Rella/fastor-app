import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import { fetchRestaurants } from '../api/apiService';

export default function RestaurantList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (!auth) return navigate('/');
    fetchRestaurants().then((data) => {
      setItems(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Nearby Restaurants
        </h1>
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <RestaurantCard
                key={item.id}
                restaurant={item}
                onClick={() => navigate(`/detail/${item.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
