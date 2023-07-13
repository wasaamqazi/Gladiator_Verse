var Gladiator = artifacts.require("Gladiator");
// Starts here
contract("Gladiator", function (accounts) {
  it("Should assign the total supply of tokens to the owner", async function () {
    return Gladiator.deployed()
      .then(function (instance) {
        return instance.balanceOf.call(accounts[0]);
      })
      .then(function (balanceOf) {
        assert.equal(
          balanceOf.valueOf(),
          1000000000000000000000000000,
          "1000000000000000000000000000 wasn't in the account"
        );
      });
  });
  it("Total Supply must be 1000_000_000", async function () {
    return Gladiator.deployed()
      .then(function (instance) {
        return instance.totalSupply.call();
      })
      .then(function (totalSupply) {
        assert.equal(
          totalSupply.valueOf(),
          1000000000000000000000000000,
          "1000000000000000000000000000 wasn't in the account"
        );
      });
  });
  it("Transfer 1000 Token to Another Account", async function () {
    return Gladiator.deployed().then(function (instance) {
      return instance.transfer(accounts[1], 1000).then(function () {
        return instance.balanceOf.call(accounts[1]);
      });
      // .then(function (balanceOf) {
      //   assert.equal(balanceOf.valueOf(), 1000, "1000 wasn't in the account");
      // });
    });
  });
  it("1000 is the balance of the another Account ", async function () {
    return Gladiator.deployed()
      .then(function (instance) {
        return instance.balanceOf.call(accounts[1]);
      })
      .then(function (balanceOf) {
        assert.equal(balanceOf.valueOf(), 1000, "1000 wasn't in the account");
      });
  });
  it("Paused must be false when you want to transfer", async function () {
    return Gladiator.deployed()
      .then(function (instance) {
        return instance.paused.call();
      })
      .then(function (paused) {
        assert.equal(paused.valueOf(), false, "Phase is true Now");
      });
  });
});
