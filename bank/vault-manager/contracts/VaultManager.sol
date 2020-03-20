pragma solidity ^0.5.0;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./IVaultManager.sol"

contract VaultManager is IVaultManager, Ownable {
    using SafeMath for uint256;


    function deposit () payable public returns (bool) {
        emit Deposit(msg.sender, msg.value);
        return true;
    }

    function transfer(address payable recipient, uint256 amount) onlyOwner() public returns (bool) {
        require(amount <= address(this).balance);
        recipient.transfer(amount);
        uint256 remainingBalance = address(this).balance;
        emit Transfer(recipient, amount, remainingBalance);
        return true;
    }

    function withdraw(uint amount) onlyOwner() public returns (bool) {
        require(amount <= address(this).balance);
        msg.sender.transfer(amount);
        return true;
    }
    
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

}
