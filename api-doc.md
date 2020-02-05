This is the documentation for the running blockchain api

netoworknode.js file endpoints.

GET - "/" - this endpoint is used to check wheater the api is running or not

GET - "/blockchain" - returns full copy of blockchain in JSON format.

POST - '/transaction' - this endpoint is used to register the new transaction with the blockchain.

    request format - 
    {
        "amount": "string",
        "sender": "string",
        "recipient": "string"
    }

POST - '/transaction/broadcast' - this endpoing accept a transaction and broadcast it to all the available nodes in the network.

    request format - 
    {
        "amount": "string",
        "sender": "string",
        "recipient": "string"
    }

GET - '/mine' - this endpoint is used for starting the mining process of the new block.

POST - '/receive-new-block' - This endpoint is used for recieving a new block from other node.

POST - '/register-and-broadcast-node' - this endpoint is used to register a new node and broadcast it to the whole network.

    request format - 
    {
        "newNodeUrl" - "string" (ip-address:port)
    }

POST - '/register-node' - this endpoint adds the node to the current network if it is not the current node address or already present in the network.

    request format - 
    {
        "newNodeUrl" - "string" (ip-address:port)
    }

GET - '/concensus' - this endpoint looks at all the blockchains in the network and if any other is more updated then it replaces the current chain with the more updated one.

GET - '/block/:blockHash' - this endpoint returns the block with the specified hash value.

GET - '/transaction/:transactionId' - This endpoint helps us find the block which has the following transaction.

GET - '/address/:address' - this endpoint is used to gather all the transaction performed by a user and the balance of a user.

GET - '/block-explorer' - this is the link to the GUI  web frontend with some of the functionality of the blockchain.


sample blockchain json structure

{
    "chain": [
        {   "index": 1,
            "timestamp": 1580908165656,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"    },
        {
            "index": 2,
            "timestamp": 1580912271864,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "bbde8980481811eab0d9d31890986365",
                    "transactionId": "4b609450482211eab0d9d31890986365"
                }
            ],
            "nonce": 16441,
            "hash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
            "previousBlockHash": "0"
        },
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "bbde8980481811eab0d9d31890986365",
            "transactionId": "55f774b0482211eab0d9d31890986365"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}