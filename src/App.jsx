import logo from './assets/pips-palace-logo.png';
import './App.css'; // Make sure this file exists

function App() {
  const openWhatsApp = () => {
    window.open('https://wa.me/26700000000', '_blank');
  };

  return (
    <div className="app-container">
      {/* Stationary top-right logo */}
      <img src={logo} alt="Pips Palace Logo" className="top-logo" />

      {/* Faint moving background logo */}
      <img src={logo} alt="Background Logo" className="bg-logo" />

      <h1 className="title">Pips Palace</h1>
      <p className="subtitle">Premium Trading Signals</p>

      {/* Candlesticks */}
      <div className="candlestick-container">
        <div className="candle green candle1" />
        <div className="candle green candle2" />
        <div className="candle green candle3" />
        <div className="candle red engulfing" />
      </div>

      {/* WhatsApp Button */}
      <button className="whatsapp-btn" onClick={openWhatsApp}>
        Chat on WhatsApp
      </button>
    </div>
  );
}

export default App;
