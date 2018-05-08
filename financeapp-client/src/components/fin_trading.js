import React, { Component } from 'react';

class FinTrading extends Component {

	render() {
		const { finances, targetCurrency, currencies } = this.props; 

		// Get all the revenue through the years
		const revenue = finances.map((finance) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.revenue.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.revenue}</td>
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
				let financeValue = finance.revenue.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.revenue} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
		});

		// Get all the profits through the years
		const profits = finances.map((finance) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.profit.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.profit}</td>
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
				let financeValue = finance.profit.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.profit} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
		})

		// Get all the grossincome through the years
		const grossincomes = finances.map((finance) => {
			// We want to check for the current currency in the field
			let financeSymbol = finance.grossincome.split(" ")[0]; 
			if(financeSymbol === targetCurrency.currencysymbol) {
				return (
					<td key={finance._id} scope="col">{finance.grossincome}</td>
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
				let financeValue = finance.grossincome.split(" ")[1];
				let convertedValue = Math.floor((financeValue/currencyrate) * targetCurrency.currencyrate); 
				// Show conversion in subscript 
				return (
					<td key={finance._id} scope="col">{finance.grossincome} <sub>{targetCurrency.currencysymbol + convertedValue}</sub></td>
				)
			}
		})


		return(
			<div className="card">
				<div className="card-body">
					<p className="table_title">Financial Trading</p>
					<table className="table table-bordered">
					  <thead>
					    <tr>
					    	<th scope="row">Base Currency</th>
					    	<th scope="col">2012</th>
					      	<th scope="col">2013</th>
					      	<th scope="col">2014</th>
					      	<th scope="col">2015</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">Revenue</th>
					      { revenue }
					    </tr>
					    <tr>
					      <th scope="row">Profit</th>
					      { profits }
					    </tr>
					    <tr>
					      <th scope="row">Gross Income</th>
					      { grossincomes }
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default FinTrading;