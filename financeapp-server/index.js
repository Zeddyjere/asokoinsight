// App package requires
const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors");
const errorHandler = require("./handlers/errors");
const app = express();  
const db = require("./models")
const PORT = process.env.PORT || 8000; 

// Route Requires 
const financeRoutes = require("./routes/finance"); 
const currencyRoutes = require("./routes/currency"); 

// App setup 
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// The routes go here 
app.use("/api/finance", financeRoutes);
app.use("/api/currency", currencyRoutes);

// Missing route error handler
app.use(function(req, res, next) {
	let err = new Error("Not Found"); 
	err.status = 404; 
	next(err); 
})

app.use(errorHandler);


// App listen 
app.listen(PORT, () => {
	console.log(`The app is listening on port ${PORT}`); 
}) 
