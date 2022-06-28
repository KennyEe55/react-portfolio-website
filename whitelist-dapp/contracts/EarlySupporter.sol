// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract EarlySupporter {
    //max number of supporters for my career
    uint8 public maxSupporterAddresses;
    //create mapping of supportersAddress
    //If address in registered as a supporter, will set it to true. If not by default it is false.
    mapping(address => bool) public supportersAddress;

    uint8 public numOfSupporters; 

    constructor(uint8 _maxSupporterAddresses) {
        maxSupporterAddresses = _maxSupporterAddresses;
    }

    function addAddressToSupportList() public {
        //check if address is a supporter already
        require(!supportersAddress[msg.sender], "Sender is already a supporter");
        //check if max supporter count is reached
        require(numOfSupporters < maxSupporterAddresses, "More can't be added, limit reached");
        supportersAddress[msg.sender] = true; //set address to become a supporter
        numOfSupporters += 1;  //increase numOfSupporters after that
    }
    
}