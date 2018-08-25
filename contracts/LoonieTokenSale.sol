pragma solidity ^0.4.24;

/**
* This contract is responsible for handling the 
* Loonie Token Sale (crowd funding for the Loonie project
* @author insculpt
*/
import "./Loonie.sol";
import "./SafeMath.sol";

contract LoonieTokenSale {
    using SafeMath for uint256;

    address admin;

    uint8 public tokenSaleStart;
    uint8 public tokeSaleEnd;
    uint  public targetAmount;
    uint  public weiRaised;
    uint  public price;
    uint  public tokensSold;
    // Instantiates the token contract within the sale contract to 
    Loonie public loonieToken;

    event Transfer(address indexed from, address indexed to, uint256 value);
    
    constructor(
    Loonie _loonieToken
    )
    public {
        loonieToken = _loonieToken;
        admin = msg.sender;
        price = 35000000000; // in wei
    }
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    /**
    determines how many tokens a buyer will get based on the price
    then sends the tokens to the sender
    @param _tokenAmount amount of tokens the buyer wants
    @param _value the value of the tokens is wei
     */
    function buyToken(uint _tokenAmount, uint _value) public  payable returns(bool success) {
       // require( _tokenAmount = ( _value.div(price)), "Enter the correct amount of tokens");
       // require(loonieToken.allowance[admin][loonieToken.owner] >= 0, "Send more ether");
        //keeps track of tokens sold
        tokensSold = tokensSold.add(_value);

        // if(_tokenAmount < price.mul(100)){
        //     balances(_sender) = balances(_sender).add(_sentAmount);
            
        // }
        loonieToken.transfer(msg.sender, _tokenAmount);
        emit Transfer(admin, msg.sender, _tokenAmount);
        return true;
    }



}