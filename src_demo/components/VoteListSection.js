import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

import { BrowserRouter, Switch, Route, Link } from 'react-router';
export default class VoteListSection extends Component {
	static propTypes = {
		VoteList:PropTypes.object.isRequired,
		actions:PropTypes.object.isRequired
	}

	render() {

		const { VoteList, actions} = this.props;

		let owner_pic = VoteList.owner_pic.split(',');
		
		let owner_pic2 = owner_pic.map(function(item) {
			let picArray = item.split("?");
			if( picArray.length == 1){
				picArray[0] += "?x-oss-process=style/compress";   //针对没有后缀的图片做相应处理。
				return item = picArray[0];

			}else{
				return item
			}
		})
		owner_pic = owner_pic2[0];

		return (
			<div className="pin" >
	            <div className="box bd02">
	                <Link to={'/info/'+VoteList.id}><img className="opt-img" src={owner_pic}/></Link>
	                <div className="num" >编号：{ VoteList.owner_number} </div>
	                <div className="cname">小区：{ VoteList.owner_address} </div> 
	                <div className="zan t-center colorf bg02 bdr10 ">
	                    <a className="colorf" >为我投票</a>
	                </div>
	                <div className="piao">票数：{ VoteList.owner_vote}</div>
	            </div>
	        </div>
		)
	}
}