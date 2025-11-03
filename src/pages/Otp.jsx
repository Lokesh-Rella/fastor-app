import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/restaurants');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center text-indigo-700">Verify OTP</h2>
        <InputField
          label="Enter OTP"
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 123456"
        />
        <button
          onClick={handleVerify}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
