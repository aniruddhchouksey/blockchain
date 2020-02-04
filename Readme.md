This is the containerize instance of the blockchain app.

to run the instance of blockchain 

clone the repository

docker build -t <your-name>/blockchain .

docker run -p 3000:3001 <your-name>/blockchain

now the block chain has started on the current computer on the port 3000.

the blockchain is constructed as an API and it can be accessed using a web browser or postman

to see the blockchian in the json format you can make a get request to the localhost:3000/blockchain

all the time the blockchain is working we can see the logs on the terminal


