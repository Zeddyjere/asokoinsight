const db = require("../models"); 

exports.createFinance = async function(req, res, next) {
	try{ 
		// The (POST) route will look something like this -> /api/finance
		let createdFinance = await db.Finance.create(req.body); 
		// Return a json object
		let foundCurrency = await db.Finance.findById(createdFinance._id).populate("basecurrency"); 
		return res.status(200).json(foundCurrency); 
	} catch(err) {
		return next(err); 
	}
}

exports.getFinances = async function(req, res, next) {
	try{
		// The (GET) route will look something like this -> /api/finance
		let foundFinances = await db.Finance.find({}).populate("basecurrency"); 
		// Return a json object with result 
		return res.status(200).json(foundFinances); 
	} catch(err) {
		return next(err); 
	}
}

exports.deleteFinances = async function(req, res, next) {
	try{
		// The (DELETE) route will look something like this -> /api/finance
		await db.Finance.remove();
		// Remove the finances from the database 
		return res.status(200).json({ message: "All finances were removed" }); 
	} catch(err) {
		return next(err); 
	}
}

exports.getFinanceMeta = async function(req, res, next) {
	try {
		// The (GET) route will look something like this -> /api/finance/metadata
		let foundFinances = await db.Finance.findOne({});
		// Get the keys for this object
		let metaData = foundFinances[0]; 
		return res.status(200).json({ metadata: foundFinances})
	} catch(err) {
		return next(err)
	}
}