const Web3 = require('web3');
const url = 'https://mainnet.infura.io/v3/4dc57cdfd9d948eeaf14c33b7bcbd085'
const address = "0x8312ce7317f95f1e89f488a5e6d4c901ec8a0e5c";

const web3 = new Web3(url)

// ACOUNT
web3.eth.getBalance(address)
.then((data) => {
    const balance = web3.utils.fromWei(data, 'ether')
    console.log('Balance on Account: ', balance)
}).catch((error) => {
    console.error(err);
});


web3.eth.getTransactionCount(address)
.then((data) => {
    console.log('Count Transactions on Account: ', data)

}).catch((error) => {
    console.error(err);
})

web3.eth.getGasPrice()
.then((data) => {
    const gas = web3.utils.fromWei(data, 'ether')

    console.log('getGasPrice: ', gas)

}).catch((error) => {
    console.error(err);
})





// CONTRACT
const contractAddress = "0x0D8775F648430679A709E98d2b0Cb6250d2887EF";
const abi = [{ "constant": true, "inputs": [], "name": "batFundDeposit", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "batFund", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenExchangeRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "finalize", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "refund", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenCreationCap", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "isFinalized", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "fundingEndBlock", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "ethFundDeposit", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "createTokens", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenCreationMin", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "fundingStartBlock", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "_ethFundDeposit", "type": "address" }, { "name": "_batFundDeposit", "type": "address" }, { "name": "_fundingStartBlock", "type": "uint256" }, { "name": "_fundingEndBlock", "type": "uint256" }], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "LogRefund", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "CreateBAT", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }];

const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.name().call()
.then(result => console.log('Token Name From Contract: ', result))
.catch(error => console.error(error))

contract.methods.symbol().call()
.then(result => console.log('Symbol From Contract: ', result))
.catch(error => console.error(error))

contract.methods.totalSupply().call()
.then(result => console.log('Total Supply From Contract: ', result))
.catch(error => console.error(error))