// Import the necessary libraries
const { ethers } = require('ethers');

// Initialize your Avalanche wallet provider (replace with your actual provider)
const provider = new ethers.providers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc');

// Connect to your wallet (replace with your private key or mnemonic)
const wallet = new ethers.Wallet('your-private-key', provider);

// Send tokens to a player's address
async function sendTokens(playerAddress, amount) {
  const tx = await wallet.sendTransaction({
    to: playerAddress,
    value: ethers.utils.parseEther(amount.toString()), // Convert amount to wei
  });
  await tx.wait(); // Wait for transaction confirmation
}

// Call this function when the player achieves the desired score
const playerAddress = '0x...'; // Replace with the player's address
const rewardAmount = 10; // Replace with the desired reward amount
sendTokens(playerAddress, rewardAmount);
