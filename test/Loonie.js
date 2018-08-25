var Loonie = artifacts.require("./Loonie.sol");

contract('Loonie', function(accounts){
    it('sets the total supply upon deployment', function(){
    	return Loonie.deployed().then(function(instance){ tokenIstance = instance;
    	   return tokenIstance.totalSupply()}).then(function(totalSupply){
    	   	assert.equal(totalSupply.toNumber(), 1000 * 10 ** 18, 'sets the totalSupply to 1000'); 
            return tokenIstance.decimals();
           }).then(function(decimals){
            assert.equal(decimals, 18);           
            return tokenIstance.burn(1 * 10 ** 18);
           }).then(function(receipt){
               return tokenIstance.balanceOf(accounts[0]);
           }) .then(function(balance){
            assert.equal(balance.toNumber(accounts[0]), (1000 * 10 ** 18) - (1 * 10 ** 18), "The tokens were burned");
            accs = [accounts[1],accounts[2]];
            amnts = [2000000000000000000,2000];
           // return tokenIstance.batchTransfer(accs, amnts);
           })//.then(function(receipt){
        //        assert.equal(receipt, "The numbers don't add up");
        //    }) ;
    })
    it("sets the symbol upon deployment", function(){
    	return Loonie.deployed().then(function(ins){ tokenIns = ins;
    	    return tokenIns.symbol()}).then(function(symbol){
    	    	assert.equal(symbol, "LNI", "Sets the symbol to LNI");
                return tokenIns.transfer(accounts[1], 1000000000);
    	    }).then(function(receipt){
                return tokenIns.balanceOf(accounts[1]);
            }).then(function(balance){ 
                assert.equal(balance.toNumber(accounts[1]),1000000000, "The tokens were succesfully transfered");
            });
    })
    it("approves a certain address to spend tokens from owner address", function(){
        Loonie.deployed().then(function(instance){
            app = instance;
            return app.approve(accounts[1], 1000*10**15);
        }).then(function(approve){
            assert.equal(receipt, "Approved");
            return app.transferFrom.call(accounts[0],accounts[2], 1000*10*15);
        }).then(function(transferFrom){
            assert.equal(receipt, "Transferred");
            return app.balanceOf(accounts[2]);

        }).then(function(balanceOf){
            assert.equal(balanceOf.toNumber(accounts[2]), 100*10*15, "Transfer confirmed");
            
        })
    });
});