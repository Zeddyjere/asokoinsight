import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return(
			<div>
				<Link to="/" className="btn btn-light ct_margin_right">Page 1</Link>
				<Link to="/agriculture" className="btn btn-light ct_margin_right">Page 2</Link>
				<Link to="/docs" className="btn btn-light ct_margin_right">Api Docs</Link>
				<div className="sm_divider"></div>
			</div>
		) 
	}
}

export default Navigation;