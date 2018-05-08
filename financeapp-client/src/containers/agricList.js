import React, { Component } from 'react'; 
import AgKPI from '../components/ag_KPI'; 
import Navigation from '../components/navigation';
import TargetCurrency from '../components/target_currency'
const FINANCEAPI = '/api/finance';
const CURRENCYAPI = '/api/currency';

class AgricList extends Component {
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
		this.setTargetCurrency = this.setTargetCurrency.bind(this);  
	}

	componentWillMount() {
		this.loadFinances();
		this.loadCurrencies();
	}

	// Fetch all the finances from my API
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
						<AgKPI currencies={ this.state.currencies} targetCurrency={ this.state.targetCurrency } finances={ this.state.finances } />
					</div>
				</div>
			</div>
		)
	}
}

export default AgricList;