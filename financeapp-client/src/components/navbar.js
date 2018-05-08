import React, { Component } from 'react'; 

class Navbar extends Component {
	render() {
		return(
			<nav className="navbar customnav">
				<div className="container">
					<div className="navbar-brand">
						Asoko Insight - <span className="font_thin"> Coding Exercise </span>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;