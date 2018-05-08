const express = require("express"); 
const router = express.Router(); 
const { createFinance, getFinances, deleteFinances, getFinanceMeta } = require("../handlers/finance"); 

// Finance routes will go here 
router.route("/")
	.post(createFinance)
	.get(getFinances)
	.delete(deleteFinances)

router.get("/metadata", getFinanceMeta)

module.exports = router; 