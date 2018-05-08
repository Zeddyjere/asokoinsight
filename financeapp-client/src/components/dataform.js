import React, { Component } from 'react'; 

class DataForm extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			revenue: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			profit: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			grossincome: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			assets: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			liabilities: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			acreprice: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			acrenumber: '',
			inputcosts: {
				inputValue: '',
				basecurrencysymbol: "$"
			},
			basecurrencysymbol: "$", 
			year: ''
		}

		this.handleChangeBaseCurrency = this.handleChangeBaseCurrency.bind(this);
		this.handleIndCurrencyChange = this.handleIndCurrencyChange.bind(this);
		this.handleNumber = this.handleNumber.bind(this); 
		this.handleInput = this.handleInput.bind(this); 
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleChangeBaseCurrency(e) {
		let revenue = Object.assign({}, this.state.revenue); 
		revenue = { inputValue: this.state.revenue.inputValue, basecurrencysymbol: e.target.value  }

		let profit = Object.assign({}, this.state.profit); 
		profit = { inputValue: this.state.profit.inputValue, basecurrencysymbol: e.target.value  }

		let grossincome = Object.assign({}, this.state.grossincome); 
		grossincome = { inputValue: this.state.grossincome.inputValue, basecurrencysymbol: e.target.value  }

		let assets = Object.assign({}, this.state.assets); 
		assets = { inputValue: this.state.assets.inputValue, basecurrencysymbol: e.target.value  }

		let liabilities = Object.assign({}, this.state.liabilities); 
		liabilities = { inputValue: this.state.liabilities.inputValue, basecurrencysymbol: e.target.value  }

		let acreprice = Object.assign({}, this.state.acreprice); 
		acreprice = { inputValue: this.state.acreprice.inputValue, basecurrencysymbol: e.target.value  }

		let inputcosts = Object.assign({}, this.state.inputcosts); 
		inputcosts = { inputValue: this.state.inputcosts.inputValue, basecurrencysymbol: e.target.value  }

		this.setState({ revenue, profit, grossincome, assets, liabilities, acreprice, inputcosts, basecurrencysymbol: e.target.value })
	}

	handleIndCurrencyChange(e) {
		// Take the value from e.target.name and update the state's base currency to new obj with new value
		let newObj = Object.assign({}, this.state[e.target.name])
		newObj = { inputValue: '', basecurrencysymbol: e.target.value }
		this.setState({ [e.target.name]: newObj })
	}

	handleInput(e) {
		// Get the input val from form input and set state to that plus the currency symbol 
		let newObj = Object.assign({}, this.state[e.target.name])
		newObj = { inputValue: `${newObj.basecurrencysymbol} ${e.target.value}`, basecurrencysymbol: newObj.basecurrencysymbol }
		this.setState({ [e.target.name]: newObj  })
	}

	handleNumber(e) {
		// Set state of acre number 
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit() {
		this.props.addFinance(this.state);
	}


	render() {
		const { finances, currencies } = this.props;

		// Get the currency names
		const currencynames = currencies.map((currency) => (
				<option value={currency.currencysymbol} key={currency._id}>{ currency.currencyname }</option>
			)
		)

		// Get currency symbols 
		const currencysymbols = currencies.map((currency) => {
				if(currency.currencysymbol !== this.state.basecurrencysymbol) {
					return (
						<option key={currency._id}>{ currency.currencysymbol }</option>
					)
				}
			}
		)

		let latestYear; 

		// Check for the latest year and update the "year" field in the dataform
		if(finances === "") {
			latestYear = 2012; 
		} else {
			latestYear = `Enter the Year ${finances.length + 2012}`; 
		}

		return(
			<div>
				<div className="card dataform">
					<div className="card-body">
						<p className="table_title">Data Entry Form</p>
						<hr />
						<form id="dataForm">
						  <p className="table_title">Base Currency Settings and Year</p>
						  <div className="form-row">
						    <div className="col">
						    	<input type="number" className="form-control" name="year" onChange={ this.handleNumber } placeholder={latestYear} />
						    </div>
						    <div className="col">
						      	<select className="form-control" onChange={ this.handleChangeBaseCurrency }>
							      <option disabled>Choose the BASE currency</option>
							      { currencynames }
							    </select>
						    </div>
						  </div>
						  <div className="sm_divider"></div>
						  <p className="table_title">Financial Trading</p>
						  <div className="form-row">
						  	<div className="col">
						  		<div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="revenue" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } placeholder="Revenue" name="revenue" />
						  			</div>
						  		</div>
						    </div>
						    <div className="col">
						      <div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="profit" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } name="profit" placeholder="Profit" />
						  			</div>
						  		</div>
						    </div>
						    <div className="col">
						      <div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="grossincome" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } name="grossincome" placeholder="Gross Income" />
						  			</div>
						  		</div>
						    </div>
						  </div>
						  <div className="sm_divider"></div>
						  <p className="table_title">Financial Assets</p>
						  <div className="form-row">
						  	<div className="col">
						      <div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="assets" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } name="assets" placeholder="Assets" />
						  			</div>
						  		</div>
						    </div>
						    <div className="col">
						      <div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="liabilities" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } name="liabilities" placeholder="Liabilities" />
						  			</div>
						  		</div>
						    </div>
						  </div>
						  <div className="sm_divider"></div>
						  <p className="table_title">Agriculture KPI</p>
						  <div className="form-row">
						  	<div className="col">
						      <div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="acreprice" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } name="acreprice" placeholder="Price per Acre" />
						  			</div>
						  		</div>
						    </div>
						    <div className="col">
						      <input type="number" className="form-control" name="acrenumber" onChange={ this.handleNumber } placeholder="Number Acres" />
						    </div>
						    <div className="col">
						      <div className="form-row">
						  			<div className="col-sm-4">
						  				<select className="form-control" name="inputcosts" onChange={ this.handleIndCurrencyChange }>
									      <option disabled>Select Currency</option>
									      <option>{ this.state.basecurrencysymbol }</option>
									      { currencysymbols }
									    </select>
						  			</div>
						  			<div className="col-sm-8">
						  				<input type="number" className="form-control" onChange={ this.handleInput } name="inputcosts" placeholder="Input Costs" />
						  			</div>
						  		</div>
						    </div>
						  </div>
						  <div className="sm_divider"></div>
						  <button type="button" className="btn btn-primary" onClick={ this.handleSubmit }>Enter data</button>
						</form>
					</div>
				</div>
				<div className="sm_divider"></div>
			</div>
		)
	}
}

export default DataForm;