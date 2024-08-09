// Add your deployment script for Helloworld project
/*
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("LoanDAppBasicModule", (m) => {
  const Contract = m.contract("CoreLoanPlatform", []);
  return { Contract };
});
*/
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("CoreLoanPlatform", (m) => {
  const CoreLoanPlatform = m.contract("CoreLoanPlatform");
  return { CoreLoanPlatform };
});
