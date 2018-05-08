const mongoose = require("mongoose"); 

const currencySchema = new mongoose.Schema({ 
	currencyname: {
		type: String, 
		required: true
	}, 
	currencysymbol: {
		type: String, 
		required: true 
	}, 
	currencycode: { 
		type: String, 
		required: true
	}, 
	currencyrate: { 
		type: Number, 
		required: true
	}
})

const Currency = mongoose.model("Currency", currencySchema); 

module.exports = Currency; 