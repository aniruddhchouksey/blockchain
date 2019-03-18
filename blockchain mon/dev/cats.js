const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app" , { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
	index: Number,
	timestamp: Number, 
	transactions: [],
	nonce: Number,
	hash: String,
	previousBlockHash: String 
});

var Cat = mongoose.model("Cat", catSchema);//singular version of the model
//adding a new cat to the database

// var cat = new Cat({
// index: 3,
// timestamp: 1540138926817,
// transactions: [
// {
// amount: 12.5,
// sender: "00",
// recipient: "20509470d54d11e888ecdde7acb962e7",
// transactionId: "56100a50d54d11e888ecdde7acb962e7",
// },
// {
// amount: 22,
// sender: "HJVGYU&IYH&*ANIRUDDH*",
// recipient: "GHNMVGJKKBJ6G7GIY7U6GUABHISHEK",
// transactionId: "663138a0d54d11e888ecdde7acb962e7",
// },
// ],
// nonce: 84333,
// hash: "0000ff185627d06d279bd49386f8227f567f09026e0685af40d3e58d027240c0",
// previousBlockHash: "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
// });

console.log(cat);
cat.save(function(err, cat){
	if(err) {
		console.log("something went wrong with the db")
	} else {
		console.log("we just saved the cat to the db")
		console.log(cat)
	}
});

//retrive all the cats from the database

Cat.find({}, function(err, cats){
	if(err) {
		console.log("oh, no");
		console.log(err);
	} else {
		console.log("all the cats....");
		console.log(cats);
	}
})