import React,{ Component } from 'react'
import { ReactDOM,render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

import defaultstyle from '../public/css/default.css'

import commonstyle from '../public/css/common.css'

import indexstyle from '../public/css/index.css'

import { Router, Route, hashHistory,IndexRoute } from 'react-router';

import App from './containers/App'

const store = createStore(reducer,applyMiddleware(thunk))


// 首页
const IndexThd = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/CampaignIntroduce').default);
    }, 'IndexThd');
}



const VoteInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/VoteInfo').default);
    }, 'VoteInfo');
}

const AppIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/AppIndex').default);
    }, 'AppIndex');
}

const SignUp = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/SignUp').default);
    }, 'SignUp');
}

const RankList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/RankList').default);
    }, 'RankList');
}


/*const Alert = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Alert').default);
    }, 'Alert');
}

const Loading = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Loading').default);
    }, 'Loading');
}
*/
const Main = () => (
	<Router history={hashHistory}>
		<Route exact path="/" component={App} >
      <IndexRoute getComponent = {AppIndex} /> 
      <Route path="/info/:id"  getComponent={VoteInfo} />
      <Route path="/index_thd" getComponent={IndexThd} />
      <Route path="/sign_up" getComponent={SignUp} />
      <Route path="/rank_list" getComponent={RankList} />
    </Route>
  </Router>
)
render(
	<Provider store={store}>
  		<Main />  
  </Provider>,
  document.getElementById('root')
)