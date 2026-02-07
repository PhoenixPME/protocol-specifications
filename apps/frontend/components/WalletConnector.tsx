'use client';

import { useState } from 'react';
import { connectWallet } from '@/lib/coreum';

export default function WalletConnector() {
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const connect = async () => {
    setLoading(true);
    try {
      const { address } = await connectWallet();
      setAddress(address);
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    setAddress('');
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 10)}...${addr.slice(-8)}`;
  };

  return (
    <div className="flex items-center space-x-4">
      {address ? (
        <>
          <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg">
            {formatAddress(address)}
          </div>
          <button
            onClick={disconnect}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connect}
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}
