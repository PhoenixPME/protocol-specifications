'use client';

import { useState, useEffect } from 'react';

export default function LeapStatusPage() {
  const [leapInstalled, setLeapInstalled] = useState(false);

  useEffect(() => {
    setLeapInstalled(!!window.leap);
  }, []);

  return (
    <div style={{ padding: '40px', fontSize: '24px' }}>
      <h1>Leap Wallet Status</h1>
      <p>Leap installed: {leapInstalled ? 'YES ✅' : 'NO ❌'}</p>
      {leapInstalled ? (
        <p style={{ color: 'green' }}>Leap is ready for connection!</p>
      ) : (
        <p>Install from: https://leapwallet.io</p>
      )}
    </div>
  );
}
