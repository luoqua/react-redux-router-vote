import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
import {
	bindActionCreators
} from 'redux'
import {
	connect
} from 'react-redux'
import Header from '../components/Header'
import Index from '../components/index'
import Footer from '../components/Footer'
import * as TodoActions from '../actions'
import { BrowserRouter, Switch, Route, Link,withRouter } from 'react-router';
import {
	setFontSize
} from '../function/common'

import basestyle from '../../public/css/base.css'

import listloadingstyle from '../../public/css/listloading.min.css'

import iconfont from '../../public/js/iconfont'

import Loading from '../components/loading'

import Alert from '../components/alert'

setFontSize()


class App extends Component {
	
	render(){

		const { todos, actions } = this.props
		return (
			<div>
						{React.cloneElement(this.props.children, 
		            {
		                actions:actions,
		                todos: todos,
		            }) 
		        }
	      <Alert show = {todos.alertShow} message = {todos.alertMessage} />
	      <Loading show = {todos.loadingShow} message = {todos.loadingMessage} />
			</div>
		)
	}
}


App.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}



const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(App))