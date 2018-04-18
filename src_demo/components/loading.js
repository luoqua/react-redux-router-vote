import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import scss from '../../public/scss/loading.scss'


export default class loading extends Component {

	render(){

		return( 
          <div>
						<div className="component-loading">
              <div className="loadings">
                <div className="loading-list"></div>
                <div className="loading-list"></div>
                <div className="loading-list"></div>
                <div className="loading-list"></div>
                <div className="loading-list"></div>
                <div className="loading-list"></div>
                <div className="loading-list"></div>
                <div className="loading-list"></div>
              </div>
              <div className="toast_text">数据加载中</div>
            </div>
            <div className="toast_mask"></div>
          </div> 
					)
		}
	}
