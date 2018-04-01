// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "crazy shop lamp success blind certain project acid market sand club balcony";

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/QWMgExFuGzhpu2jUr6Pq"),
      network_id: 3
    }
  }
}
