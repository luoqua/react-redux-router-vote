import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import scss from '../../public/scss/test.scss'


export default class Alert extends Component {

	render(){
		const {show,message} = this.props;
		if( !show ) return null;
		return( 
				<div>
					<div className="component-alert-type1 show active">
						{ message }
					</div>
				</div>
			)
		}
	}