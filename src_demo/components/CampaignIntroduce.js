import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './footer'
import {
     bindActionCreators
} from 'redux'
import {
     connect
} from 'react-redux'
import * as TodoActions from '../actions'
import {
     setFontSize
} from '../function/common'

setFontSize()

class CampaignIntroduce extends Component {
	render() {
		return (
				<div className="rule f14 plr10 mt10  color02">
          <span ><strong>前言:</strong></span>
          <br /> 过完春节、经历元宵、踏过情人节，女神节又近在眼前。历经三个节日的洗礼后，想必辛劳的“女神”们已经开始有些疲惫，2017年辛劳一切收获了一份沉甸甸的果实，拥有了属于自己的完美新家，金钥匙家装为江城业主服务千百家，2018年3月8日分享2017年对新家靓照，为女神节里的“她”赢取一份美丽的礼物。
          <br />
          <br />
          <span ><strong>活动时间</strong></span>
          <br /> 报名：3月1日-3月8日
          <br /> 公布：3月9日
          <br /> 领奖：3月10日（过期不领视为自动放弃）
          <br />
          <br />
          <span ><strong>活动规则</strong></span>
          <br /> 一、报名（3月1日-3月8日24:00）
          <br /> 1、所有业主公开自主报名参选，电脑或手机登录官方网站（www.jysgcd.com）或关注金钥匙官方微信公众号（jysgcd）点击“女神节”按钮即可报名；
          <br /> 2、在公众号中回复“女神节”，点击相应的报名链接，上传自家装修图片也可参与活动；
          <br /> 3、进入页面中，点击“我要报名”按钮，上传新家照片，填写相关信息需通过工作人员审核；
          <br /> 4、工作人员审核后将在前端首页显示，如首页没有第一时间显示，请大家耐心等待。
          <br /> 5、审核通过 后即拉票参与评选；
          <br />投票：
          <br />1.  投票用户关注金钥匙官方微信公众号，回复您需要投票的业主编号，即可参与投票；
          <br />2.  登录金钥匙官网或者微信公众号搜索，“金钥匙家装工厂店”即可找到；
          <br />
          <br /> 二、评选标准：
          <br /> 1.所有评选结果，根据排行榜实际投票票数而定；
          <br /> 2、同1用户每天只能投3票，可连续多天投票；
          <br /> 3、如出现恶意刷票情况，一经查实视为自动放弃；
          <br />
          <br /> 三、公布(3月9日)
          <br /> 活动结束后，芜湖金钥匙家装工厂店将在微信公众号及官方网站上公布名单，请参与活动业主及时关注相关信息。
          <br />
          <br /> 四、领奖（3月10日）
          <br /> 时间：3月11日~3月31日，过期未领者视为自动放弃。
          <br />一等奖1户：票选第1名业主，价值2000元左右礼品， 
          <br />二等奖1户：票选第2名业主，价值1000元左右礼品， 
          <br />三等奖1户：票选第3名业主，价值800元左右礼品，
          <br />幸运奖8户：票选第4-11名的业主，价值200元左右礼品
          <br />参与奖49户：票选第12~60名业主，价值100元礼品
          <br />
          <br /> 五、女神节系列活动说明
          <br /> 3月3日园艺·软装讲座
          <br /> 金钥匙特邀资深软装设计师 “家居软装讲座”
          <br /> 芜湖袭人花艺资深花艺师亲临讲解 “家居花艺沙龙”，学做“春日花盒”带回家，现场精美点心品尝。
          <br />
          <br /> 3月8日美丽鲜花献给最美的你
          <br /> 3月8日到店咨询即可免费收到18束精美花束（价值200元），送完即止！
          <br />注意事项：本次活动由业主自行报名，不分先后，不分装修风格，仅供网友参考，活动最终解释权归芜湖金钥匙家装工厂店所有。
          <br />活动咨询热线：0553-3801233
          <br />客服专线：18158815517
          <br />
      </div>
		)
	}
}





export default class IndexThd extends Component {
     componentDidMount() {
          
          if( this.props.todos.listloading  != ""){
               this.props.todos.listloading.destroy()       //移除上一组件绑定的 touchmove 事件
          }
     }
	render() {
		return (
			<div id="listloading2">
				<Header />
				<CampaignIntroduce />
				<Footer />
			</div>
		)
	}
}

IndexThd.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

