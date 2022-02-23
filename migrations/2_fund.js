const Funder = artifacts.require("Funder");

module.exports = function (deployer) {
  deployer.deploy(Funder);
};
