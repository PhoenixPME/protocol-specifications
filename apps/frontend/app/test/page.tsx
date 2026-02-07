'use client';

export default function TestPage() {
  const testLeap = () => {
    if (typeof window === 'undefined' || !window.leap) {
      alert('Leap Wallet not found! Please install from https://www.leapwallet.io/');
      return;
    }

    // Use window.leap.request NOT window.leap.cosmos.request
    window.leap.request({
      method: 'cosmos_requestAccounts',
      params: { chainId: 'coreum-testnet-1' }
    })
    .then(accounts => {
      if (accounts && accounts.length > 0) {
        alert('✅ Connected!\nAddress: ' + accounts[0].address);
      }
    })
    .catch(err => {
      alert('❌ Error: ' + err.message);
    });
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>PhoenixPME Leap Wallet Test</h1>
      <button
        onClick={testLeap}
        style={{ padding: '15px 30px', fontSize: '16px', marginTop: '20px' }}
      >
        Test Leap Wallet Connection
      </button>
    </div>
  );
}
