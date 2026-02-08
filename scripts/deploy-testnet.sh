#!/bin/bash
# Phoenix PME Testnet Deployment Script

echo "=== Phoenix PME Testnet Deployment ==="
echo "1. Building contract..."
cd contracts/phoenix-escrow
cargo wasm
echo "✅ Contract built"

echo "2. Testnet deployment requires:"
echo "   - junod CLI installed"
echo "   - Testnet funds"
echo "   - Chain connection"
echo ""
echo "Ready for testnet deployment!"
