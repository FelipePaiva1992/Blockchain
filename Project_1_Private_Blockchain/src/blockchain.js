const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');
const BlockClass = require('./block.js');
const bitcoinMessage = require('bitcoinjs-message');

class Blockchain {
    constructor() {
        this.chain = [];
        this.height = -1;
        this.initializeChain();
    }

    async initializeChain() {
        if (this.height < 0) {
            let block = new BlockClass.Block({ data: 'Genesis Block' });
            await this._addBlock(block);
        }
    }

    _addBlock(block) {
        let self = this;
        return new Promise(async (resolve, reject) => {
            let height = self.chain.length;
            block.previousBlockHash = self.chain[height - 1] ? self.chain[height - 1].hash : null;
            block.height = height;
            block.time = new Date().getTime().toString().slice(0, -3);
            block.hash = await SHA256(JSON.stringify(block)).toString();
            const blockValid = block.hash && (block.hash.length === 64) && (block.height === self.chain.length) && block.time;
            blockValid ? resolve(block) : reject(new Error('Cannot add invalid block.'));
        })
            .catch(error => new Error("Error adding a new block"))
            .then(block => {
                this.chain.push(block);
                this.height = this.chain.length - 1;
                return block;
            });
    }

    requestMessageOwnershipVerification(address) {
        return new Promise((resolve) => {
            let unsignedMessage = `${address}:${new Date().getTime().toString().slice(0, -3)}:starRegistry`;
            resolve(unsignedMessage);
        });
    }

    submitStar(address, message, signature, star) {
        let self = this;
        return new Promise(async (resolve, reject) => {
            if (!bitcoinMessage.verify(message, address, signature)) reject(new Error('Invalid message.'));
            let block = new BlockClass.Block({ star });
            block.owner = address;
            block = await self._addBlock(block)
            resolve(block);
        });
    }

    getBlockByHash(hash) {
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                resolve(self.chain.filter(block => block.hash === hash)[0]);
            } catch (error) {
                reject(new Error("Error getting block by hash"))
            }
        });
    }

    getBlockByHeight(height) {
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let block = self.chain.filter(p => p.height === height)[0];
                block ? resolve(block) : resolve(null);
            } catch (error) {
                reject(new Error("Error getting block height"))
            }

        });
    }

    getStarsByWalletAddress(address) {
        let self = this;
        let stars = [];
        return new Promise(async (resolve, reject) => {
            const isChainValid = await this.validateChain();

            if (!isChainValid) reject(new Error('Chain not valid'))

            let ownedBlocks = self.chain.filter(block => block.owner === address);
            if (ownedBlocks.length === 0) reject(new Error('Address not found.'));
            stars = ownedBlocks.map(block => {
                return { owner: block.owner, stars: JSON.parse(hex2ascii(block.body)) }
            });
            stars ? resolve(stars) : reject(new Error('Failed to return stars'));
        });
    }

    validateChain() {
        let self = this;
        return new Promise(async (resolve, reject) => {
            for (let block of self.chain) {
                if (await block.validate()) {
                    if (block.height > 0) {
                        let prevBlock = self.chain.filter(b => b.height === block.height - 1)[0];
                        if (block.previousBlockHash !== prevBlock.hash) {
                            reject(new Error(`Invalid link: Block not linked to the hash of previuos block`));
                            break;
                        }
                    }
                } else {
                    reject(new Error(`Invalid block: ${block.hash}`))
                    break;
                }
            }

            resolve(true);
        });
    }

}

module.exports.Blockchain = Blockchain;