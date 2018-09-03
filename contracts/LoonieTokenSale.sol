pragma solidity ^0.4.24;

/**
* This contract is responsible for handling the 
* Loonie Token Sale (crowd funding for the Loonie project
* @author insculpt
*/
import "./Loonie.sol";
//import "./SafeMath.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract LoonieTokenSale is Loonie{
    using SafeMath for uint;

    address admin;
    uint  public tokenPrice;
    uint  public tokensSold;
    bool  public closed = false;
    event Sell(address indexed _buyer, uint _amount );

    constructor( ) public {
        admin = msg.sender;
        tokenPrice = 35000000000; // in wei
    }
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    
    /**
    determines how many tokens a buyer will get based on the tokenPrice
    then sends the tokens to the sender
    @param _tokenAmount amount of tokens the buyer wants
    
     */
    function buyTokens(uint _tokenAmount) public  payable returns(bool success) {
        require(!closed, "TokenSale is closed");
        //require(msg.value = _tokenAmount.mul(tokenPrice), "Enter the correct amount of tokens");
        require(balanceOf(this), "The tokens are depleted");
        //keeps track of tokens sold
        tokensSold = tokensSold.add(_tokenAmount);       
        require(transfer(msg.sender, _tokenAmount), "Unsuccefull");
        emit Sell(msg.sender, _tokenAmount);
        return true;
    }

    function endSale() public onlyAdmin returns(bool success){
        require(balanceOf(this) >= 0, "All tokens sold");
        require(transfer(admin, balanceOf(this)), "Failed to end Sale");
        emit Transfer(this, admin, balanceOf(this));
        closed = true;
        return true;
    }


}