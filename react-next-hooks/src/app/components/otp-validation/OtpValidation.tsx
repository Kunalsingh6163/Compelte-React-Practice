'use client'
import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/send-otp', { email });
      if (response.status === 200) {
        setIsOtpSent(true);
        setMessage('OTP sent to your email');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', { email, otp });
      if (response.status === 200) {
        setMessage('OTP verified successfully');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendOtp} disabled={isOtpSent}>
        Send OTP
      </button>

      {isOtpSent && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default OtpVerification;
