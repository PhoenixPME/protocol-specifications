import WalletSelector from '../components/WalletSelector';
import { AuctionCreator } from "@/components/AuctionCreator";
import { AuctionManager } from "@/components/AuctionManager";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">PhoenixPME</h1>
        <p className="text-gray-600 mb-8">Multi-wallet Precious Metals Exchange</p>

        {/* WALLET CONNECTION */}
        <div className="mb-12">
          <WalletSelector />
        </div>

        {/* Platform Status */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Phase 1: Core</h2>
            <p className="text-gray-600">Metal selection, weight input, pricing</p>
            <div className="mt-4 text-green-600">✅ Complete</div>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Phase 2: Item Details</h2>
            <p className="text-gray-600">Form type, purity, certification, images</p>
            <div className="mt-4 text-green-600">✅ Complete</div>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Phase 3: Shipping & Payment</h2>
            <p className="text-gray-600">Carriers, payment options, conversion</p>
            <div className="mt-4 text-green-600">✅ 100% Complete!</div>
          </div>
        </div>

        {/* Phase 3 Details */}
        <div className="bg-white p-8 rounded-xl border shadow-sm mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Phase 3: COMPLETE!</h2>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">1400 lines of code</span>
          </div>
          <p className="text-gray-600 mb-6">All 4 shipping & payment components delivered</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🚢</div>
              <h3 className="font-semibold">Shipping</h3>
              <p className="text-gray-500 text-sm">390 lines</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold">Payment</h3>
              <p className="text-gray-500 text-sm">320 lines</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💱</div>
              <h3 className="font-semibold">Converter</h3>
              <p className="text-gray-500 text-sm">370 lines</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold">Escrow</h3>
              <p className="text-gray-500 text-sm">320 lines</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-gray-600">Total: <strong>1400 lines</strong> of production code</p>
            <p className="text-gray-500 text-sm mt-1">Ready for integration into auction creation flow</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90">
              Test Phase 3 Components →</button>
          </div>
        </div>

        {/* Next Steps */}
        {/* Phase 7: Auction Creation */}
        <div className="mt-12 p-8 bg-white rounded-xl border shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 7: Create Your First Auction</h3>
          <p className="text-gray-600 mb-6">Test the auction escrow contract with mock data (works offline)</p>
          <div className="max-w-md mb-8">
            <AuctionCreator />
          </div>
          <AuctionManager />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Ready for Phase 7</h3>
          <p className="text-blue-700">Connect your Keplr wallet above to start blockchain integration and smart contract deployment.</p>
        </div>
      </div>
    </div>
  );
}


