# DinoNFT

### Inspiration

Various renowned web3 related games are played across the globe, however many of them lack a functional reward system for the player unlike downloadable multiplayer online games. What if there was a way to change that, a way to create a multi-platform level reward system? A reward system that is able to reliably link the user's account, or wallet, across multiple web3 games? From speaking with various representatives from blockchain companies such as Avalance and Metis, we understood the scope of a web3 player's reality. DinoNFT is the result of an attempt to create a such reward system, where players will be able to leverage from their gameplays and use the rewards from one game for another, whether it be through NFT tokens or in-game items.

### What It Does

DinoNFT is a simple web3 dino running game, similar to that of the google offline game. Before the player runs the game, there is an option for the user to connect his/her blockchain wallet to the game. The developer/owner connects their wallet to the web3 game in the code. 

As the player continues to play the game, for every time his score increases by 100, the player is rewarded through tokens via the authorizer's blockchain wallet to the players wallet. For the premise of this project, we decided to use Avalanche BlockChain to set up the owner's wallet and connect it to the code using Hardhat while we used MetaMask as the player's wallet to test the program. 

The goal of this project was for a proof of concept and to demonstrate how we can create a reward system for the player using blockchain for more advanced games. We tried to implement a backend for DinoNFT using Firebase in order to understand how a blockchain works and to test its security but ran out of time due to the time constriction in the Hackathon, but the key features were developing a fun and interactive web3 game, establsihing a connection with blockchain wallets, and creating this reward system.

### How We Built It

This projedct was built using Javascript and p5.js along with various game components such as sprites. Although trying to encorporate React.js, due to some compliations, we were unable to encorporate React.js before the time limit, and HTML and CSS were used to create the webpage that would host the web3 game. An Avalanche wallet and Hardhat were used in an attempt to establish a smart contract. 

### Chaellenges We Ran Into

This was the first time we were using Blockchain, and we had no knowledge or experience with it before. It took a lot of research and time to understand how Blockchain works, and how we can use it to leverage a secure way to tranfer tokens and other valuables. Moreover, with the tight time restrictions, it took time to build a functional web3 game. Working with Near and Avalanche representatives really aided us and we were able to bring forth this idea.

### Accomplishments we're Proud Of

We're proud to be able to bring forth a way for users to leverage a way of payment for web3 players by using Blockchain wallets, a growing futuristic method of payment and transfer of valuables. Above all else, we're proud to be able to learn to leverage this new technology from scratch and implement it to create functional projects.

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
