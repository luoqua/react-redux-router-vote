import React, {
	Component
} from 'react'
import PropType from 'prop-types'
import ReactDom from 'react-dom'
import {
	creatstore
} from 'redux'
import {
	Providers,
	connect
} from 'react-redux'

import defaultstyle from '../public/css/default.css'

import commonstyle from '../public/css/common.css'

import indexstyle from '../public/css/index.css'

import basestyle from '../public/css/base.css'

import listloadingstyle from '../public/css/listloading.min.css'

import iconfont from '../public/js/iconfont'

import Header from './components/header'

import Index from './components/index'

import {
	setFontSize
} from './function/common'

setFontSize()

class App extends Component {
	constructor() {
		super();
	}

	render() {

		return (
			<div>
					<Header />
					<Index  />
				</div>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById("root")
)