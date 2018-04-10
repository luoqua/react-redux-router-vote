// headerComponent 头部公共组件
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Header extends Component {
	render(){
		const bgImageSrc = require("../../public/image/px.jpg");
		return (
			<div className="top-banner">
	          <img src={bgImageSrc} className="top-image"/>
	      	</div>
		)
	}	
}