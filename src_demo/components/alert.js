import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import scss from '../../public/scss/test.scss'


export default class Alert extends Component {

	render(){
		console.log(this)
		const message = "提交成功";
		return( 
				<div>
					<div className="component-alert-type1 show active">
						{ message }
					</div>
				</div>
			)
		}
	}