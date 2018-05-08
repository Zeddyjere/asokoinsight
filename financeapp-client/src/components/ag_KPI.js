import React, { Component } from 'react'; 

class AgKPI extends Component {
	render() {
		const { finances, targetCurrency, currencies } = this.props; 

		// Get all the price per acre through the years
		const acreprice = finances.map((finance, index) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.acreprice.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.acreprice}</td>
				)
			} else {
				// Set currency rate for the value in cell 
				let currencyrate; 
				const currency = currencies.map((currency) => {
					if(currency.currencysymbol === financeSymbol) {
						currencyrate = currency.currencyrate;
					}
				})
				// Convert the currency to target currency
				let financeValue = finance.acreprice.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.acreprice} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
		});

		// Get all the number of acres through the years
		const acrenumber = finances.map((finance, index) => (
			<td key={finance._id} scope="col">{finance.acrenumber}</td>
		))

		// Get all the input costs through the years
		const inputcost = finances.map((finance, index) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.inputcost.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.inputcost}</td>
				)
			} else {
				// Set currency rate for the value in cell 
				let currencyrate; 
				const currency = currencies.map((currency) => {
					if(currency.currencysymbol === financeSymbol) {
						currencyrate = currency.currencyrate;
					}
				})
				// Convert the currency to target currency
				let financeValue = finance.inputcost.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.inputcost} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
		})

		return(
			<div className="card">
				<div className="card-body">
					<p className="table_title">Agriculture KPI</p>
					<table className="table table-bordered">
					  <thead>
					    <tr>
					    	<th scope="row">Base currency</th>
					      	<th scope="col">2012</th>
					      	<th scope="col">2013</th>
					      	<th scope="col">2014</th>
					      	<th scope="col">2015</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">Price per Acre</th>
					      { acreprice }
					    </tr>
					    <tr>
					      <th scope="row">Number of Acres</th>
					      { acrenumber }
					    </tr>
					     <tr>
					      <th scope="row">Input Costs</th>
					      { inputcost }
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default AgKPI;