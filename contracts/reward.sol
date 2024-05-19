// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Reward {
    IERC20 public token;

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function claimReward() external {
        // Implement reward logic here
        // For example, transfer tokens to the caller
        token.transfer(msg.sender, 1000); // Transfer 1000 tokens as a reward
    }
}
