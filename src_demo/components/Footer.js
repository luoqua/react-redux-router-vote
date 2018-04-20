import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route, Link } from 'react-router';
export default class Footer extends Component {
	static propType ={
		footerItem:PropTypes.array.isRequired
	}
      
	render() {
		return (
				<div className="bot-nav flex align-center f10 bg02">
            <Link  to="/" className="home item1 bdf" >
            	<img src={ require('../../public/image/icon002.png') } alt="" />
            	<br />首页
            </Link>
            <Link  to="/sign_up" className="mine item1 bdf">
            	<img src={ require('../../public/image/icon005.png') }alt="" />
            	<br />我要报名
            </Link>
            <Link  to="/index_thd"className="community item1 bdf">
            	<img src={ require('../../public/image/icon004.png') }alt="" /><br />活动介绍
            </Link>
            <Link to="/rank_list" className="ticket item1 bdf" >
            	<img src={ require('../../public/image/icon003.png') }alt="" /><br />排名
            </Link>
        </div>
	     )
	}
}