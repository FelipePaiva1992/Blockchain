const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(data) {
        this.id = 0;
        this.nonce = 144443;
        this.body = data;
        this.hash = "";
    }

    generateHash() {
        let self = this;
        var promise = new Promise(function (resolve, reject) {
            const hash = SHA256(JSON.stringify(self)).toString()
            self.hash = hash
            if (hash) {
                resolve(self);
            }
            else {
                reject(Error("It broke"));
            }
        });

        return promise;
    }
}

module.exports.Block = Block;