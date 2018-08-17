var Loonie = artifacts.require("./Loonie.sol");

module.exports = function(deployer) {
  deployer.deploy(Loonie);
};
