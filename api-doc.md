This is the documentation for the running blockchain api

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
############################################################33

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
