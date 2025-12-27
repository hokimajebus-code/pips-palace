import logo from './assets/pips-palace-logo.png'

function App() {
  return (
    <div className="center" style={{ height: '100vh', flexDirection: 'column' }}>
      <img src={logo} className="logo fade-in" alt="Pips Palace Logo" />
      <h1 className="text-gold fade-in" style={{ marginTop: '20px' }}>
        Pips Palace
      </h1>
    </div>
  )
}

export default App
