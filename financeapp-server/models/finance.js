const mongoose = require("mongoose"); 

const financeSchema = new mongoose.Schema({
	revenue: { type: String, required: true },

	profit: { type: String, required: true },

	grossincome: { type: String, required: true }, 

	assets: { type: String, required: true }, 

	liabilities: { type: String, required: true },

	acreprice: { type: String, required: true },

	acrenumber: { type: Number, required: true },

	inputcost: { type: String, required: true }, 

	year: { type: String, required: true },

	basecurrency: { type: String }
})

const Finance = mongoose.model("Finance", financeSchema); 

module.exports = Finance;