import { Wallet } from '../wallet-service';

declare global {
  interface Window {
    keplr?: any;
  }
}

export const KeplrWallet: Wallet = {
  name: 'Keplr',
  icon: '🔷',

  isInstalled: () => {
    return typeof window !== 'undefined' && !!window.keplr;
  },

  connect: async (): Promise<string> => {
    console.log('=== KEPLR CONNECTION ===');
    
    if (!window.keplr) {
      throw new Error('Install Keplr from https://www.keplr.app/');
    }

    try {
      await window.keplr.enable('coreum-testnet-1');
      const offlineSigner = window.keplr.getOfflineSigner('coreum-testnet-1');
      const accounts = await offlineSigner.getAccounts();
      
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts in Keplr');
      }
      
      const address = accounts[0].address;
      console.log('✅ Connected:', address);
      return address;
      
    } catch (error: any) {
      throw new Error(`Keplr error: ${error.message}`);
    }
  },

  disconnect: async () => {},

  getBalance: async () => {
    if (!window.keplr) return 'Install Keplr';
    
    try {
      // Get address
      await window.keplr.enable('coreum-testnet-1');
      const offlineSigner = window.keplr.getOfflineSigner('coreum-testnet-1');
      const accounts = await offlineSigner.getAccounts();
      
      if (!accounts || accounts.length === 0) {
        return 'Not connected';
      }
      
      const userAddress = accounts[0].address;
      console.log('Fetching balance via backend for:', userAddress);
      
      // Use YOUR backend API (no CORS issues!)
      const response = await fetch(`/api/balance?address=${encodeURIComponent(userAddress)}`);
      
      console.log('Backend response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Backend response data:', data);
        
        // Find TEST tokens (utestcore = micro TEST)
        const testToken = data.balances?.find((b: any) => 
          b.denom === 'utestcore' || (b.denom && b.denom.includes('test'))
        );
        
        if (testToken && testToken.amount) {
          // Convert from micro (utestcore) to TEST
          const amount = parseInt(testToken.amount) / 1000000;
          console.log(`✅ REAL balance via backend: ${amount} TEST`);
          return `${amount} TEST`;
        }
        
        console.log('No TEST tokens found in response');
        return '0 TEST';
      } else {
        const errorText = await response.text();
        console.error('Backend error:', response.status, errorText);
        return `Backend Error ${response.status}`;
      }
      
    } catch (error) {
      console.error('Balance fetch error:', error);
      return 'Network Error';
    }
  },

  getNetwork: async () => {
    return 'coreum-testnet-1';
  },
};
