import React from 'react';
import { render } from 'react-dom';


import { Router, Route, hashHistory,Link } from 'react-router';
import '../app.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
          Logged in as Jane
        </header>
        <main>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/app" component={Dashboard}/>
            <Route path="/inbox" component={Inbox}>
            	<Route path="messages/:id" component={Message} />
            </Route>
            <Route path="/calendar" component={Calendar}/>
            <Route path="*" component={Dashboard}/>
        </main>
      </div>
    );
  }
};

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<p>Dashboard</p>
			</div>
		);
	}
};

class Message extends React.Component { 
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

class Inbox extends React.Component {
	render() {
		return (
			<div>
				
        		{this.props.children || <h2>Inbox</h2>}
			</div>
		);
	}

};

class Calendar extends React.Component {
	render() {
		return (
			<div>
				<p>Inbox</p>
			</div>	
		);
	}
};	
render((
	<Router history={hashHistory}>
		<Route exact path="/" component={Dashboard}/>
        <Route path="/app" component={Dashboard}/>
        <Route path="/inbox" component={Inbox}>
        	<Route path="messages/:id" component={Message} />
        </Route>
        <Route path="/calendar" component={Calendar}/>
        <Route path="*" component={Dashboard}/>
	</Router>
),document.querySelector('#root'));

