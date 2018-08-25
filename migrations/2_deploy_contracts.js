var Loonie = artifacts.require("./Loonie.sol");
var LoonieTokenSale = artifacts.require("./LoonieTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(Loonie, 1000,10000, "Loonie", "LNI");
  
  deployer.deploy(LoonieTokenSale, Loonie.address);
};
