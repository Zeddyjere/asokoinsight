const mongoose = require("mongoose"); 
mongoose.set("debug", true); 
mongoose.Promise = Promise; 
mongoose.connect("mongodb://localhost/financeapp", {
	keepAlive: true
})

module.exports.Finance = require("./finance");
module.exports.Currency = require("./currency");