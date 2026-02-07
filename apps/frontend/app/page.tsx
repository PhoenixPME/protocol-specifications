import WalletConnector from '@/components/WalletConnector';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                🦅 PhoenixPME
              </h1>
              <p className="text-gray-600">
                Decentralized Precious Metals Trading
              </p>
            </div>
            <WalletConnector />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to PhoenixPME</h2>
          <p className="text-gray-600 mb-8">
            The future of decentralized precious metals trading is here.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-bold mb-2">Secure Escrow</h3>
              <p className="text-gray-600">Funds held securely until delivery confirmed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="font-bold mb-2">Fair Auctions</h3>
              <p className="text-gray-600">Transparent bidding for precious metals</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">Cross-Chain</h3>
              <p className="text-gray-600">Coreum + XRPL integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            PhoenixPME • Built on Coreum • Windows 11 Ready
          </p>
        </div>
      </footer>
    </main>
  );
}
