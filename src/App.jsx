import { useEffect, useState } from 'react';
import logo from './assets/pips-palace-logo.png';

function App() {
  const openWhatsApp = () => {
    window.open('https://wa.me/26700000000', '_blank');
  };

  // Optional: For animation of background logo
  const [bgPos, setBgPos] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgPos((prev) => (prev + 0.05) % 100);
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  // Candlestick animation styles
  const candleAnimation = (delay = '0s') => ({
    animation: `bounce 1.5s ease-in-out ${delay} infinite alternate`,
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Stationary top-right logo */}
      <img
        src={logo}
        alt="Pips Palace Logo"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '80px',
          zIndex: 2,
        }}
      />

      {/* Faint moving background logo */}
      <img
        src={logo}
        alt="Background Logo"
        style={{
          position: 'absolute',
          width: '400px',
          opacity: 0.05,
          top: `${bgPos}%`,
          left: `${bgPos}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <h1 style={{ color: '#FFD700', zIndex: 1 }}>Pips Palace</h1>
      <p style={{ color: '#fff', zIndex: 1 }}>Premium Trading Signals</p>

      {/* Candlesticks */}
      <div style={{ display: 'flex', gap: '15px', zIndex: 1 }}
