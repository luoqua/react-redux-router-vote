// IndexComponent 头部公共组件
import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {
  setFontSize,
  waterfall,
  imgIsload,
  Fetch
} from '../function/common'

import $ from 'n-zepto'


class IndexInfo extends Component {
  render() {
    return (
      <div className="top-data color03 flex pack-center f14 mt10">
            <div className="item1 t-center">已参与
                <br />77</div>
            <div className="item1 t-center center bd03">总投票数
                <br />24849</div>
            <div className="item1 t-center">访问量
                <br />27313</div>
        </div>
    )
  }
}

class SearchInfo extends Component {
  render() {
    return (
      <div className="searchbox flex mt10 plr10 f12">
          <input type="text" className="text item1 bgf color02 bdr5 bd02" name="q" value="" placeholder="搜索小区名称\编号" />
          <input type="button" className="submit-btn ml5 bg04 colorf bdr5" value="搜索"  />
      	</div>
    )
  }
}

class VoteList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {

    var promise = imgIsload(".opt-img"); //获取拿到的 promise

    Promise.all(promise).then(function() { //待图片加载完成
      waterfall("waterbox", ".pin");

    })

    window.onresize = function() {
      setFontSize()
      waterfall("waterbox", ".pin");
    }


    var opitions = {
      method: "POST",
      body: {
        pageIndex: 1,
        pageLimit: 6
      }
    }
    Fetch('http://bb.wxjysgcd.com/WuHu/Index/getVoteList', opitions)
      .then((data) => {
        console.log(data)
      })

    window.onload = function() {
      var hei = $(window).height();
      // 创建iscroll之前必须要先设置父元素的高度，否则无法拖动iscroll
      $('#root, .listloadingClass').height(hei);
      var Listloading = require('listloading');
      var flg;
      var pageIndex = 1; //初始分页页数
      var pageLimit = 6; //分页每页显示条数
      var listloading = new Listloading('#root', {
        disableTime: true, // 是否需要显示时间
        pullUpAction: function(cb) { // 上拉加载更多
          pageIndex++;
          //加载完成 返回 cb( true )
          var opitions = {
            method: "POST",
            body: {
              pageIndex: pageIndex,
              pageLimit: pageLimit
            }
          }
          Fetch('http://bb.wxjysgcd.com/WuHu/Index/getVoteList', opitions)
            .then((data) => {
              console.log(data)
            })


        },
        pullDownAction: function(cb) { // 下拉刷新
          cb();
        },
        Realtimetxt: '官人不要，请放开我！',
        loaderendtxt: '我是有底线的',
        // iscroll的API 
        iscrollOptions: {
          scrollbars: false // 显示iscroll滚动条
        }
      });
    }

  }
  render() {
    return (

      <div id="waterbox" className="plr5 color02 mt10">
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/8PBRztMWCs.jpeg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/QNWZQRQeix.jpeg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/M2CWY4jANd.jpg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/M2CWY4jANd.jpg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/8PBRztMWCs.jpeg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/QNWZQRQeix.jpeg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/8PBRztMWCs.jpeg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="pin">
              <div className="box bd02">
                  <a><img className="opt-img" src="http://jys-weixin.oss-cn-shanghai.aliyuncs.com/user-dir/QNWZQRQeix.jpeg?x-oss-process=style/compress"/></a>
                  <div className="num">编号：8828 </div>
                  <div className="cname">小区：保利中央公园 </div>
                  <div className="zan t-center colorf bg02 bdr10 ">
                      <a className="colorf" >为我投票</a></div>
                  <div className="piao">票数：500</div>
              </div>
          </div>
          <div className="clearfix"></div>
      </div>
    )
  }
}

export default class Index extends Component {
  render() {
    return (
      <div>
				<IndexInfo />
				<SearchInfo />
				<VoteList />
			</div>
    )
  }
}