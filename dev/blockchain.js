const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const uuid = require('uuid/v1');

function Blockchain() {
	this.chain = [];//all the block stored here
	this.pendingTransactions = [];//all new transaction and pending transactions are placed here before mining
	this.currentNodeUrl = currentNodeUrl;
	this.networkNodes = [];
	//genisin block
	this.createNewBlock(100, "0", "0");
}

//block prototype
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pendingTransactions,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash
	};

	this.pendingTransactions = [];//clear all the pending transaction
	this.chain.push(newBlock);// push the block in the chain

	return newBlock;//return the newly created block
}

Blockchain.prototype.getLastBlock = function() {
	return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
	const newTransaction = {
		amount: amount,
		sender: sender,
		recipient: recipient,
		transactionId: uuid().split('-').join('')
	};
	return newTransaction;
}

Blockchain.prototype.addTransactionToPendingTransaction = function(transactionObj) {
	this.pendingTransactions.push(transactionObj);
	return this.getLastBlock()['index'] + 1;
};

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
	const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);//converting the data to string
	const hash = sha256(dataAsString);//using library function to create hash
	return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
	let nonce = 0;
	let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	while(hash.substring(0,4) !== '0000') {
		nonce++;
		hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		// console.log(nonce + " " + hash);		
	}
	return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain) {
	let validChain = true;

	for (var i = 1; i < blockchain.length; i++) {
		const currentBlock = blockchain[i];
		const prevBlock = blockchain[i - 1];
		const blockHash = this.hashBlock(prevBlock['hash'], { transaction: currentBlock['transactions'], index: currentBlock['index'] }, currentBlock['nonce']);
		if (blockHash.substring(0, 4) !== '0000') validChain = false;
		if (currentBlock['previousBlockHash'] !== prevBlock['hash']) validChain = false;
	};

	const genesisBlock = blockchain[0];
	const correctNonce = genesisBlock['nonce'] === 100;
	const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
	const correctHash = genesisBlock['hash'] === '0';
	const correctTransactions = genesisBlock['transactions'].length === 0;

	if (!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

	return validChain;
};

Blockchain.prototype.getBlock = function(blockHash) {
	let correctBlock = null;
	this.chain.forEach(block => {
		if(block['hash'] === blockHash) correctBlock = block;
	});

	return correctBlock;
};

Blockchain.prototype.getTransaction = function(transactionId) {
	let correctTransaction = null;
	let correctBlock = null;
	this.chain.forEach(block => {
		block.transactions.forEach(transaction => {
			if(transaction.transactionId === transactionId) {
				correctTransaction = transaction;
				correctBlock = block;
			}
		});
	});

	return {
		transaction: correctTransaction,
		block: correctBlock
	}
}

Blockchain.prototype.getAddress = function(address) {
	const addressTransaction = [];
	this.chain.forEach(block => {
		block.transactions.forEach(transaction => {
			if(transaction.sender === address || transaction.recipient === address) {
				addressTransaction.push(transaction);
			};
		});
	});

	let balance = 0;
	addressTransaction.forEach(transaction => {
		if(transaction.recipient === address ) balance += transaction.amount;
		else if(transaction.sender === address) balance -= transaction.amount;
	});

	return {
		addressTransaction: addressTransaction,
		balance: balance
	};	
};

module.exports = Blockchain;