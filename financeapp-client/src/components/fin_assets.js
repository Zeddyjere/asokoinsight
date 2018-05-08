import React, { Component } from 'react'; 

class FinAssets extends Component {
	render() {
		const { finances, targetCurrency, currencies } = this.props; 

		// Get all the assets data through the years
		const assets = finances.map((finance) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.assets.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.assets}</td>
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
				let financeValue = finance.assets.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.assets} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
			
		});

		// Get all the liability data through the years
		const liabilities = finances.map((finance) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.liabilities.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.liabilities}</td>
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
				let financeValue = finance.liabilities.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.liabilities} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
			
		})

		return(
			<div className="card">
				<div className="card-body">
					<p className="table_title">Financial Assets</p>
					<table className="table table-bordered">
					  <thead>
					    <tr>
					        <th scope="col">Base Currency</th>
					        <th scope="col">2012</th>
					      	<th scope="col">2013</th>
					      	<th scope="col">2014</th>
					      	<th scope="col">2015</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">Assets</th>
					      { assets }
					    </tr>
					    <tr>
					      <th scope="row">Liabilities</th>
					      { liabilities }
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default FinAssets;