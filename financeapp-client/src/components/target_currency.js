import React, { Component } from 'react'; 

class TargetCurrency extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currency: {
				currencysymbol: '',
				currencyrate: ''
			}
		}
		this.handleTargetCurrency = this.handleTargetCurrency.bind(this);
		this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
	}
		
	// Handle setting the target currency
	handleTargetCurrency() {
		this.props.setTargetCurrency(this.state.currency);
	}

	handleCurrencyChange(e) {
		// Update state with object containing the currency from target value
		let currencyValue = e.target.value; 
		let newValue = currencyValue.split(" "); 
		let newCurrency = Object.assign({}, this.state.currency); 
		newCurrency = { currencysymbol: newValue[0], currencyrate: parseFloat(newValue[1]) }
		this.setState({ currency: newCurrency })
	}

	render() {
		const { currencies } = this.props;
		const currencyNames = currencies.map((currency) => (
			<option value={ currency.currencysymbol + " " + currency.currencyrate } key={currency._id}>{ currency.currencyname }</option>
		))

		return (
			<div className="card">
				<div className="card-body">
					<p className="table_title">Set the Target Currency here</p>
					<form>
						<select className="form-control" onChange={ this.handleCurrencyChange }>
					      <option disabled>Choose the currency</option>
					      { currencyNames }
					    </select>
					    <div className="sm_divider"></div>
					    <button onClick={ this.handleTargetCurrency } type="button" className="btn btn-primary btn-sm btn-block">Set Target Currency</button>
					</form>
				</div>
			</div>
		)
	}
}

export default TargetCurrency; 