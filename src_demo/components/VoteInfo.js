import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'
import PropTypes from 'prop-types'
import { setFontSize } from '../function/common'

setFontSize()

export default class VoteInfo extends Component {
	constructor(props, context){
		super(props, context)
	}
	componentDidMount() {
		if( this.props.todos.listloading  != ""){
      this.props.todos.listloading.destroy()       //移除上一组件绑定的 touchmove 事件
    }
		let voteId = this.props.routeParams.id;
		
		this.props.actions.getVoteListid( voteId )
	}
	static contextTypes = {
	    store: PropTypes.object.isRequired
	}
	render() {
		if( this.props.todos.vote_list_id !== '' ){
			let votelist = this.props.todos.vote_list_id[0];
			let owner_pic = votelist.owner_pic.split(',');
			owner_pic = owner_pic.map(function(item) {
				let picArray = item.split("?");
				if( picArray.length == 1){
					picArray[0] += "?x-oss-process=style/compress";   //针对没有后缀的图片做相应处理。
					return item = picArray[0];

				}else{
					return item
				}
			})
			return (
				<div>
			    <div className="t-center f16 fb mt20 color03 info1">我的美居</div>
			    <div className="detail p-relative f14 color02 bgf">
				    	{
				    		owner_pic.map( (item,index) => 
									<img src= {item} key={ index } />
				    		)
				    	}
			        <div className="num">编号：{ votelist.owner_number }</div>
			        <div className="name">参选美居：{ votelist.owner_address }</div>
			        <div className="zige" >作品简介：{ votelist.owner_desc }</div>
			        <div className="piao">票数：{ votelist.owner_vote }</div>
			        <div className="zan t-center colorf bg02 bdr10 "><a className="zan t-center bg02 bdr10 colorf">为我投票</a></div>
			        <div className="zan t-center colorf bg02 bdr10 "><a className="zan t-center bg02 bdr10 colorf">获取宣传海报，为TA助力</a></div>
			        <div className="zan t-center colorf bg02 bdr10 "><a className="zan t-center bg02 bdr10 colorf">我也要报名</a></div>
			        <div className="zan t-center colorf bg02 bdr10 "><a className="zan t-center bg02 bdr10 colorf">查看更多美居</a></div>
			        <div className="rule f14 plr10 mt10  color02">
			            评选内容
			        </div>
			    </div>
		    </div>
		  )
		}else{
			return null
		}
	}

}