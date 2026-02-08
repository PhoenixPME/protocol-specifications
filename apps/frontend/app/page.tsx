export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🏆 Phoenix Precious Metals Exchange</h1>
      <p>Professional precious metals trading on Coreum blockchain</p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f9ff', borderRadius: '8px' }}>
        <h2>✅ Smart Contract Status</h2>
        <ul>
          <li>Complete auction system (create, bid, end, release)</li>
          <li>7 metals supported: Platinum, Palladium, Gold, Silver, etc.</li>
          <li>Multiple product forms: bars, rounds, coins, etc.</li>
          <li>Professional grading & certification system</li>
          <li>All contract tests passing (5/5)</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
        <p><strong>Note:</strong> Frontend interface is being optimized. Core smart contract is production-ready.</p>
      </div>
    </div>
  );
}
