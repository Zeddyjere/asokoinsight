import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import FinanceList from './financeList';
import AgricList from './agricList';
import ApiDocs from '../components/apidocs';

const Main = props => {
	return (
		<div className="container">
			<Switch>
				<Route
		          exact
		          path="/"
		          render={props => {
		            return (
		              <FinanceList  
		                {...props}
		              />
		            );
		          }}
		        />
		        <Route
		          exact
		          path="/agriculture"
		          render={props => {
		            return (
		              <AgricList
		                {...props}
		              />
		            );
		          }}
		        />
		        <Route
		          exact
		          path="/docs"
		          render={props => {
		            return (
		              <ApiDocs 
		                {...props}
		              />
		            );
		          }}
		        />
			</Switch>
		</div>
	)
}

export default Main;