import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/restaurants')}>
        <h1 className="text-xl font-bold text-indigo-700">Fastor</h1>
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          navigate('/');
        }}
        className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700"
      >
        Logout
      </button>
    </header>
  );
}
