import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (mobile.length === 10) {
      localStorage.setItem('mobile', mobile);
      navigate('/otp');
    } else {
      alert('Enter a valid 10-digit mobile number');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center text-indigo-700">Login</h2>
        <InputField
          label="Mobile Number"
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}
