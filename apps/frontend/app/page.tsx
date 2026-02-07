import WalletConnector from '@/components/WalletConnector';

export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>🦅</div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>PhoenixPME</h1>
          </div>
          <WalletConnector />
        </header>

        <main style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Decentralized Precious Metals Trading
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem' }}>
            Peer-to-peer gold, silver, and platinum trading on Coreum & XRPL
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '4rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              width: '300px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Secure Escrow</h3>
              <p>Funds held securely until delivery confirmed</p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              width: '300px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚖️</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Fair Auctions</h3>
              <p>Transparent bidding for precious metals</p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              width: '300px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔗</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Cross-Chain</h3>
              <p>Coreum + XRPL integration</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
