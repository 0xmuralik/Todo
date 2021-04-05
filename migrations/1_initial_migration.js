var Migrations = artifacts.require("./Migrations.sol");
var Todo = artifacts.require("./Todo.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Todo);
};
