interface IVaultManager {
    event Deposit(address indexed from, uint256 value);
    event Transfer(address indexed from, uint256 value, uint256 remaining);
}