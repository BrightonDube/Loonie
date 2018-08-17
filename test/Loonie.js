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
           });
    })
    it("sets the symbol upon deployment", function(){
    	return Loonie.deployed().then(function(ins){ tokenIns = ins;
    	    return tokenIns.symbol()}).then(function(symbol){
    	    	assert.equal(symbol, "LNI", "Sets the symbol to LNI");
    	    });
    })
});