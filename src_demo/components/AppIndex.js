import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'

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



export default class AppIndex extends Component {
	static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }
	componentDidMount() {
		this.props.actions.listloading == undefined ? "" : this.props.actions.listloading.destroy()
        this.props.router.setRouteLeaveHook(this.props.route, () => {
	      /*if (this.state.unsaved)
	        return 'You have unsaved information, are you sure you want to leave this page?'*/
	    })
    }

	render(){
		
		const { todos, actions } = this.props

    	
		return (
			<div>
				<Index actions = {actions} todos = {todos}/> 
				<Footer />
			</div>
		)
	}
}



