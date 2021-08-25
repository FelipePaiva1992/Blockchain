const SHA256 = require('crypto-js/SHA256');

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};


const hash = SHA256(JSON.stringify(dataObject)).toString()

console.log(hash)