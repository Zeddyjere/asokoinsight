import React, { Component } from 'react'; 
import FinTrading from '../components/fin_trading';
import FinAssets from '../components/fin_assets';
import Dataform from '../components/dataform'; 
import Navigation from '../components/navigation'
import TargetCurrency from '../components/target_currency'
const FINANCEAPI = 'http://localhost:8000/api/finance'
const CURRENCYAPI = '/api/currency'

class FinanceList extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			finances: [],
			currencies: [], 
			targetCurrency: {
				// We'll make the default Dollar
		        currencysymbol: "$",
		        currencyrate: 1,
			}
		}
		this.clearData = this.clearData.bind(this); 
		this.addFinance = this.addFinance.bind(this); 
		this.setTargetCurrency = this.setTargetCurrency.bind(this); 
	}

	componentWillMount() {
		this.loadFinances();
		this.loadCurrencies();
	}

	// Fetch finances from my API
	loadFinances() {
		fetch(FINANCEAPI)
			.then(data => data.json())
			.then(finances => this.setState({finances}))
	}

	// Fetch currencies from my API
	loadCurrencies() {
		fetch(CURRENCYAPI)
			.then(data => data.json())
			.then(currencies => this.setState({currencies}))
	}

	addFinance(finance) {
		fetch(FINANCEAPI, {
			method: 'post', 
			headers: new Headers({
				'Content-Type': 'application/json',
			}), 
			body: JSON.stringify({
				revenue: finance.revenue.inputValue, 
				profit: finance.profit.inputValue, 
				grossincome: finance.grossincome.inputValue, 
				assets: finance.assets.inputValue, 
				liabilities: finance.liabilities.inputValue, 
				acreprice: finance.acreprice.inputValue, 
				acrenumber: finance.acrenumber, 
				inputcost: finance.inputcosts.inputValue, 
				year: finance.year, 
				basecurrency: finance.basecurrency
			})
		})
		.then(data => data.json())
		.then(newFinance => {
			this.setState({ finances: [...this.state.finances, newFinance] })
		})
	}

	// Remove all finances from the API 
	clearData() {
		fetch(FINANCEAPI, {
			method: 'delete'
		})
			.then(() => {
				this.setState({ finances: [] })
			})
	}

	setTargetCurrency(currency) {
		// Make a copy of the object so we dont dublicate state
		let newTarget = Object.assign({}, this.state.targetCurrency); 
		newTarget = { currencysymbol: currency.currencysymbol, currencyrate: currency.currencyrate }; 
		this.setState({ finances: this.state.finances, currencies: this.state.currencies, targetCurrency: newTarget })
	}

	render() {
		return(
			<div>
				<Navigation />
				<div className="row">
					<div className="col-lg-4">
						<TargetCurrency setTargetCurrency={ this.setTargetCurrency } currencies={ this.state.currencies } />
						<div className="sm_divider"></div>
						<button onClick={this.clearData} type="button" className="btn btn-danger btn-sm btn-block">Clear Database</button>
					</div>
					<div className="col-lg-8">
						<FinTrading currencies={ this.state.currencies} targetCurrency={ this.state.targetCurrency } finances={ this.state.finances } />
						<div className="sm_divider"></div>
						<FinAssets currencies={ this.state.currencies} targetCurrency={ this.state.targetCurrency }  finances={ this.state.finances } />
						<div className="sm_divider"></div>
						<Dataform addFinance={this.addFinance} finances={ this.state.finances } currencies={ this.state.currencies }  />
					</div>
				</div>
			</div>
		)
	}
}

export default FinanceList;