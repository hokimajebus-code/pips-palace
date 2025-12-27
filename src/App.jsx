import { useEffect, useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Preloader /> : <MainSite />}</>;
}

/* ================= PRELOADER ================= */

function Preloader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <img
          src="/pips-palace-logo.png"
          alt="PIPS PALACE"
          className="w-40 mx-auto mb-10 opacity-90"
        />

        <div className="flex items-end justify-center gap-3">
          <Candle height="h-20" color="bg-green-500" />
          <Candle height="h-28" color="bg-green-500" />
          <Candle height="h-36" color="bg-green-500" />
          <Candle height="h-48" color="bg-red-600" />
        </div>

        <p className="mt-8 text-sm tracking-widest text-gold">
          MARKET EXECUTION
        </p>
      </div>
    </div>
  );
}

function Candle({ height, color }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1 h-4 bg-gray-400"></div>
      <div className={`w-4 ${height} ${color}`}></div>
      <div className="w-1 h-4 bg-gray-400"></div>
    </div>
  );
}

/* ================= MAIN SITE ================= */

function MainSite() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Logo */}
      <img
        src="/pips-palace-logo.png"
        className="absolute inset-0 m-auto w-[600px] opacity-[0.04] pointer-events-none"
        alt=""
      />

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-cinzel tracking-widest text-gold">
          PIPS PALACE
        </h1>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <h2 className="text-5xl md:text-6xl font-cinzel text-gold mb-6">
          TRADE WITH ROYAL PRECISION
        </h2>
        <p className="max-w-xl text-gray-300 mb-10">
          Where strategy meets discipline. Precision entries. Powerful exits.
        </p>
        <a
          href="https://wa.me/26771508580"
          target="_blank"
          className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all tracking-widest"
        >
          CONTACT VIA WHATSAPP
        </a>
      </section>

      <WhatsappButton />
    </div>
  );
}

/* ================= WHATSAPP BUTTON ================= */

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/26771508580"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all z-50"
    >
      WhatsApp
    </a>
  );
}
