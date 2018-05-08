const express = require("express"); 
const router = express.Router(); 
const { createCurrency, getCurrencies } = require("../handlers/currency"); 

// Finance routes will go here 
router.route("/")
	.post(createCurrency)
	.get(getCurrencies)

module.exports = router; 