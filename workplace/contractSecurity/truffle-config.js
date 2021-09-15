const HDWallet = require('truffle-hdwallet-provider');
const metamask = "ice army rural gather quarter scan pull fashion ask length reunion grass";

module.exports = {
  networks: {
    development: {
      provider: function () {
        return new HDWallet(metamask, `HTTP://127.0.0.1:7545`)
      },
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWallet(metamask, `https://rinkeby.infura.io/v3/4dc57cdfd9d948eeaf14c33b7bcbd085`)
      },
      network_id: '4',
      gas: 4712388,
      gasPrice: 100000000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
    }
  }
}