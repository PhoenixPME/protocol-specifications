const testLeap = async () => {
  if (window.leap) {
    console.log('✅ Leap Wallet detected!');
    try {
      // Try to get accounts on Coreum testnet
      const accounts = await window.leap.cosmos.request({
        method: 'cosmos_requestAccounts',
        params: { chainId: 'coreum-testnet-1' }
      });
      console.log('📋 Accounts:', accounts);
      return true;
    } catch (error) {
      console.log('⚠️ Could not get accounts:', error.message);
      return false;
    }
  } else {
    console.log('❌ Leap Wallet not found');
    return false;
  }
};

// Run test when in browser environment
if (typeof window !== 'undefined') {
  testLeap().then(success => {
    console.log(success ? '🎉 Leap test passed!' : '🔧 Check Leap installation');
  });
}
