import logo from './assets/pips-palace-logo.png'

function App() {
  const openWhatsApp = () => {
    window.open('https://wa.me/26700000000', '_blank')
  }

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
      }}
    >
      <img src={logo} className="logo" alt="Pips Palace Logo" />

      <h1 className="text-gold">Pips Palace</h1>
      <p>Premium Trading Signals</p>

      {/* Candlestick (CSS) */}
      <div
        style={{
          width: '10px',
          height: '60px',
          background: '#00ff88',
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '-20px',
            left: '4px',
            width: '2px',
            height: '100px',
            background: '#00ff88',
          }}
        />
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          background: '#25D366',
          border: 'none',
          borderRadius: '30px',
          color: '#000',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Chat on WhatsApp
      </button>
    </div>
  )
}

export default App
