const HDWallet = require('truffle-hdwallet-provider');
const metamask = "OBFUSCATE";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      websockets: true
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
      version: "0.8.5",
    }
  }
}