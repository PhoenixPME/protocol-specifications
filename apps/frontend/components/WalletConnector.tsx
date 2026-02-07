'use client';

import { useState, useEffect } from 'react';

export default function WalletConnector() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [leapAvailable, setLeapAvailable] = useState(false);

  useEffect(() => {
    setLeapAvailable(!!window.leap?.getOfflineSigner);
  }, []);

  const connectWallet = async () => {
    if (!leapAvailable) {
      alert('Leap Wallet Cosmos API not available. Switch to Cosmos mode.');
      return;
    }

    setLoading(true);
    try {
      // Try to get accounts directly
      const signer = window.leap.getOfflineSigner('coreum-testnet-1');
      const accounts = await signer.getAccounts();
      
      if (accounts.length > 0) {
        const addr = accounts[0].address;
        setAddress(addr);
        localStorage.setItem('phoenix_wallet', addr);
        alert('Connected! Address: ' + addr.substring(0, 20) + '...');
      } else {
        alert('No accounts found in Leap Wallet.');
      }
    } catch (error) {
      console.error('Leap error:', error);
      alert('Connection failed. Error in console.');
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAddress('');
    localStorage.removeItem('phoenix_wallet');
  };

  useEffect(() => {
    const saved = localStorage.getItem('phoenix_wallet');
    if (saved) setAddress(saved);
  }, []);

  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return addr.substring(0, 10) + '...' + addr.substring(addr.length - 6);
  };

  if (!leapAvailable) {
    return (
      <button
        onClick={() => window.open('https://leapwallet.io', '_blank')}
        style={{
          padding: '10px 20px',
          background: '#666',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Install Leap
      </button>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {address ? (
        <>
          <div style={{ 
            padding: '8px 16px', 
            background: '#2a2a2a', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '14px',
            color: 'white'
          }}>
            {formatAddress(address)}
          </div>
          <button
            onClick={disconnectWallet}
            style={{
              padding: '8px 16px',
              background: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          disabled={loading}
          style={{
            padding: '10px 20px',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}
