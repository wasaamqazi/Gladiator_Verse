const hello = artifacts.require("./Gladiator");

module.exports = function (deployer) {
  deployer.deploy(hello);
};
