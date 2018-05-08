const db = require("../models"); 

exports.createCurrency = async function(req, res, next) {
	try{
		// The (POST) route will look something like this -> /api/currency
		let createdCurrency = await db.Currency.create(req.body); 
		// Return json Object 
		return res.status(200).json(createdCurrency); 
	} catch(err) {
		return next(err); 
	}
}

exports.getCurrencies = async function(req, res, next) {
	try{
		// The (GET) route will look something like this -> /api/currency
		let foundCurrencies = await db.Currency.find({}); 
		// Return json Object 
		return res.status(200).json(foundCurrencies); 
	} catch(err) {
		return next(err); 
	}
}