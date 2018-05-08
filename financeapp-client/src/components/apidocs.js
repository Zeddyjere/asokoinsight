import React, { Component } from 'react'; 
import Navigation from './navigation';

class ApiDocs extends Component {
	render() {
		return(
			<div>
				<Navigation />
				<div className="card">
					<div className="card-body">
						<p className="table_title">Api Documentation</p>
						<table className="table table-bordered">
						  <thead>
						    <tr>
						      <th scope="col">Api Endpoint</th>
						      <th scope="col">Route type</th>
						      <th scope="col">Description</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>/api/currency</td>
						      <td>GET</td>
						      <td>Request currency information and currency rates</td>
						    </tr>
						    <tr>
						      <td>/api/finance/metadata</td>
						      <td>GET</td>
						      <td>Request metadata</td>
						    </tr>
						    <tr>
						      <td>/api/finance</td>
						      <td>POST</td>
						      <td>Writes data for tables to API</td>
						    </tr>
						     <tr>
						      <td>/api/finance</td>
						      <td>GET</td>
						      <td>Reads data for tables from API</td>
						    </tr>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default ApiDocs;