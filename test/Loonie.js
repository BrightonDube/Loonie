var Loonie = artifacts.require("./Loonie.sol");

contract('Loonie', function(accounts){
    it('sets the total supply upon deployment', function(){
    	return Loonie.deployed().then(function(instance){ tokenIstance = instance;
    	   return tokenIstance.totalSupply()}).then(function(totalSupply){
    	   	assert.equal(totalSupply.toNumber(), 1000 * 10 ** 18, 'sets the totalSupply to 1000');
            return tokenIstance.standard()
    	   }).then(function(standard){
            assert.equal(standard, "Loonie v1.0");
            return tokenIstance.decimals();
           }).then(function(decimals){
            assert.equal(decimals, 18);
            var result = tokenIstance.burn.call(1000);
            return result;
           }).then(function(burn){
            assert.equal(tokenIstance.balanceOf(accounts[1]), (tokenIstance.totalSupply()-1000), "The tokens were burned");
           });
    })
    it("sets the symbol upon deployment", function(){
    	return Loonie.deployed().then(function(ins){ tokenIns = ins;
    	    return tokenIns.symbol()}).then(function(symbol){
    	    	assert.equal(symbol, "LNI", "Sets the symbol to LNI");
                return tokenIns.transfer.call(accounts[1], 1000000000);
    	    }).then(function(transfer){
                assert.equal(tokenIns.balanceOf(accounts[1]),1000000000 , "The transfer was successful");
            });
    })
});