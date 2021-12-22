// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;

    constructor() {
        console.log("Hi, I'm smart contract");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("total waves : %d", totalWaves);
        return totalWaves;
    }
}

