const Web3 = require('web3');
const EthereumTransaction = require("ethereumjs-tx").Transaction;

const url = 'HTTP://127.0.0.1:7545'
const address = "0x146c205E609B80A71c4Ed7a6F52929D49033E7dE";

const web3 = new Web3(url)

const sendingAddress = 'SENDER ADDRESS'
const receivingAddress = 'RECEIVER ADDRESS'

web3.eth.getBalance(sendingAddress)
    .then((data) => {
        const balance = web3.utils.fromWei(data, 'ether')
        console.log('Balance on sendingAddress: ', balance)
    }).catch((error) => {
        console.error(err);
    });

web3.eth.getBalance(receivingAddress)
    .then((data) => {
        const balance = web3.utils.fromWei(data, 'ether')
        console.log('Balance on receivingAddress: ', balance)
    }).catch((error) => {
        console.error(err);
    });

const rawTransaction = { nonce: 0, to: receivingAddress, gasPrice: 20000000, gasLimit: 30000, value: 1, data: "0x" }

const privateKeySender = 'PRIVATE KEY FROM SENDER';
const privateKeySenderHex = Buffer.from(privateKeySender, 'hex')
const transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)


const serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);