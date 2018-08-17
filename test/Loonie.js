var Loonie = artifacts.require("./Loonie.sol");

contract('Loonie', function(accounts){
    it('sets the total supply upon deployment', function(){
    	return Loonie.deployed().then(function(instance){ tokenIstance = instance;
    	   return tokenIstance.totalSupply()}).then(function(totalSupply){
    	   	assert.equal(totalSupply.toNumber(), 1000, 'sets the totalSupply to 1000');

    	   });
    })
});