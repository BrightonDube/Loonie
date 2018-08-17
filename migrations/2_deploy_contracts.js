var Loonie = artifacts.require("./Loonie.sol");

module.exports = function(deployer) {
  deployer.deploy(Loonie, 1000, "Loonie", "LNI");
};
