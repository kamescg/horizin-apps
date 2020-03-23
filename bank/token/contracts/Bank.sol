pragma solidity ^0.5.0;

/* --- Global --- */
import "@openzeppelin/contracts/math/SafeMath.sol";

/* --- Local --- */
import "./ATM.sol";
import "./Token.sol";

contract Bank {
    using SafeMath for uint256;

    /* -------------------------------------- */
    // Structs
    /* -------------------------------------- */
    struct atm {
      string name;
      address owner;
    }

    struct token {
      address issuer;
      string name;
      string symbol;
      uint256 supply;
    }

    /* -------------------------------------- */
    // Variables
    /* -------------------------------------- */
    mapping (address => token) public tokens;
    mapping (address => atm) public atms;

    /* -------------------------------------- */
    // Events
    /* -------------------------------------- */
    event ATMCreated(address atmAddress, address issuer);
    event TokenCreated(address tokenAddress, address owner);

    /* -------------------------------------- */
    // Logic : Public : Functions
    /* -------------------------------------- */
    function deployATM(
      string memory _name
    ) 
    public returns (address) {
        ATM a = new ATM(_name, msg.sender);
        emit ATMCreated(address(a), msg.sender);
        return address(a);
    }

    function deployToken(
      string memory _name, 
      string memory _symbol, 
      uint8 _decimals, 
      uint256 _initialSupply
    ) 
    public returns (address) {
        Token t = new Token(_name, _symbol, _decimals, _initialSupply, msg.sender);
        tokens[address(t)].issuer = msg.sender;
        tokens[address(t)].name = _name;
        tokens[address(t)].symbol = _symbol;
        tokens[address(t)].supply = _initialSupply;
        emit TokenCreated(address(t), msg.sender);
        return address(t);
    }

    /* -------------------------------------- */
    // Getters : Public : Functions
    /* -------------------------------------- */

}