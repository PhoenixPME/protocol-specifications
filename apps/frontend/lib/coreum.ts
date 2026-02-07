// Coreum testnet configuration
export const coreumTestnet = {
  chainId: 'coreum-testnet-1',
  chainName: 'Coreum Testnet',
  rpcEndpoint: 'https://full-node.testnet-1.coreum.dev:26657',
  restEndpoint: 'https://full-node.testnet-1.coreum.dev:1317',
  stakeCurrency: {
    coinDenom: 'TEST',
    coinMinimalDenom: 'utest',
    coinDecimals: 6,
  },
  bip44: {
    coinType: 990,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'coreum',
    bech32PrefixAccPub: 'coreumpub',
    bech32PrefixValAddr: 'coreumvaloper',
    bech32PrefixValPub: 'coreumvaloperpub',
    bech32PrefixConsAddr: 'coreumvalcons',
    bech32PrefixConsPub: 'coreumvalconspub',
  },
  currencies: [
    {
      coinDenom: 'TEST',
      coinMinimalDenom: 'utest',
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'TEST',
      coinMinimalDenom: 'utest',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.0625,
        average: 0.1,
        high: 0.25,
      },
    },
  ],
  features: ['stargate', 'no-legacy-stdTx', 'cosmwasm'],
};

// Simple wallet connection (will enhance later)
export async function connectWallet() {
  if (typeof window === 'undefined') {
    throw new Error('Window object not available');
  }
  
  // For now, return a mock address
  // Later we'll integrate Keplr
  return {
    address: 'coreum1mockaddressfornow1234567890',
    connected: true,
  };
}
