'use client';
import React, { useState, useEffect } from 'react';

export default function OtpForm() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // ✅ Prevent hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSendOtp = async () => {
    const res = await fetch('http://localhost:3000/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  const handleVerifyOtp = async () => {
    const res = await fetch('http://localhost:3000/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  // ✅ Avoid rendering content on server side (fix hydration)
  if (!isMounted) return null;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">OTP Verification</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 my-2"
      />
      <button onClick={handleSendOtp} className="bg-blue-500 text-white p-2">
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 my-2"
      />
      <button onClick={handleVerifyOtp} className="bg-green-500 text-white p-2">
        Verify OTP
      </button>

      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
}
