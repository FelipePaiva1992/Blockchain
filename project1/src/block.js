const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {
    constructor(data) {
        this.hash = null;
        this.height = 0;
        this.body = Buffer.from(JSON.stringify(data)).toString('hex');
        this.time = 0;
        this.previousBlockHash = null;
    }

    validate() {
        let self = this;
        return new Promise(async (resolve, reject) => {
            try {
                const hash = self.hash;
                self.hash = await SHA256(JSON.stringify({ ...self, hash: null })).toString();
                resolve(hash === self.hash);
            } catch (error) {
                reject(new Error("Erro when validate the block"))
            }
        });
    }

    getBData() {
        let self = this;
        return new Promise((resolve, reject) => {
            if (self.height <= 0) reject(new Error('It`s a genesis block'));

            const hexEncodedString = self.body;
            const decodedString = hex2ascii(hexEncodedString);
            const decodedObject = JSON.parse(decodedString);
            resolve(decodedObject);
        });
    }

}

module.exports.Block = Block;