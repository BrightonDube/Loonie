var LoonieTokenSale = artifacts.require("./LoonieTokenSale.sol");

contract(LoonieTokenSale, function(accounts){
    it("initializes the token sale", function(){
    return LoonieTokenSale.deployed().then(function(instance){
        app = instance;
        return app.address;
    }).then(function(address){
        assert.notEqual(address,"0x0", "is a contract address");
        return app.price.call();
    }).then(function(price){
        assert.equal(price, 35000000000000, "price is correct");
        return app.tokenContract();
    }).then(function(address){
        assert.notEqual(address, "0x0", "has a token address");
    });

    });
    it("Buys tokens", function(){
        return LoonieTokenSale.deployed().then(function(instant){
            app1 = instant;
            var value =  35000000000000*100*10**18;
            return app1.buyToken(100*10**18, value, {from: accounts[1]} );
        }).then(function(buyToken){
            assert.equal(receipt);
        })
    })
});