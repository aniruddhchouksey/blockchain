const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
chain: [
{
index: 1,
timestamp: 1540138786615,
transactions: [ ],
nonce: 100,
hash: "0",
previousBlockHash: "0",
},
{
index: 2,
timestamp: 1540138876752,
transactions: [ ],
nonce: 16441,
hash: "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
previousBlockHash: "0",
},
{
index: 3,
timestamp: 1540138926817,
transactions: [
{
amount: 12.5,
sender: "00",
recipient: "20509470d54d11e888ecdde7acb962e7",
transactionId: "56100a50d54d11e888ecdde7acb962e7",
},
{
amount: 22,
sender: "HJVGYU&IYH&*ANIRUDDH*",
recipient: "GHNMVGJKKBJ6G7GIY7U6GUABHISHEK",
transactionId: "663138a0d54d11e888ecdde7acb962e7",
},
],
nonce: 84333,
hash: "0000ff185627d06d279bd49386f8227f567f09026e0685af40d3e58d027240c0",
previousBlockHash: "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
},
{
index: 4,
timestamp: 1540138958144,
transactions: [
{
amount: 12.5,
sender: "00",
recipient: "20509470d54d11e888ecdde7acb962e7",
transactionId: "73e25150d54d11e888ecdde7acb962e7",
}
],
nonce: 3034,
hash: "0000a091346e8b65cf6dd285a9272fbe41374b2352f6185ada5c086a99e9403d",
previousBlockHash: "0000ff185627d06d279bd49386f8227f567f09026e0685af40d3e58d027240c0",
},
{
index: 5,
timestamp: 1540138969270,
transactions: [
{
amount: 12.5,
sender: "00",
recipient: "20509470d54d11e888ecdde7acb962e7",
transactionId: "868e4930d54d11e888ecdde7acb962e7",
}
],
nonce: 18759,
hash: "0000acb0706c42747c3293e7a25fd6b4870bf5751a22ea99d32301ba78fed7e6",
previousBlockHash: "0000a091346e8b65cf6dd285a9272fbe41374b2352f6185ada5c086a99e9403d",
},
{
index: 6,
timestamp: 1540138970414,
transactions: [
{
amount: 12.5,
sender: "00",
recipient: "20509470d54d11e888ecdde7acb962e7",
transactionId: "8d2ffa90d54d11e888ecdde7acb962e7",
}
],
nonce: 39520,
hash: "000079ffb7c4e326ed824c0c73a246a31b99f2d81768c734e6b4f15c554fbf9d",
previousBlockHash: "0000acb0706c42747c3293e7a25fd6b4870bf5751a22ea99d32301ba78fed7e6",
},
],
pendingTransactions: [
{
amount: 12.5,
sender: "00",
recipient: "20509470d54d11e888ecdde7acb962e7",
transactionId: "8dde6300d54d11e888ecdde7acb962e7",
}
],
currentNodeUrl: "http://localhost:3001",
networkNodes: [ ],
}

console.log(!null);