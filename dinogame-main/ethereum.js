let web3;



document.getElementById('connectButton').addEventListener('click', connectMetamask);


async function sendReward() {
    const accounts = await web3.eth.getAccounts();
    const fromAddress = accounts[0];
    const toAddress = 'RECEIVER_WALLET_ADDRESS'; // Replace with the actual receiver's address
    const value = web3.utils.toWei('0.01', 'ether'); // Adjust the reward value as needed

    const transactionParameters = {
        to: toAddress,
        from: fromAddress,
        value: web3.utils.toHex(value),
    };

    try {
        const txHash = await web3.eth.sendTransaction(transactionParameters);
        console.log('Transaction sent: ', txHash);
    } catch (error) {
        console.error('Transaction failed: ', error);
    }
}

// Add event listener for the button
document.getElementById('connectButton').addEventListener('click', connectMetamask);
