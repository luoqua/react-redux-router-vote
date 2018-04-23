// IndexComponent 头部公共组件
import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import VoteListSection from './VoteListSection'
import {
  setFontSize,
  waterfall,
  imgIsload,
  Fetch
} from '../function/common'

import $ from 'n-zepto'
import Header from './Header'


class IndexInfo extends Component {
  static propTypes = {
    pageInfo:PropTypes.object.isRequired,
  }
  render() {

    const { pageInfo } = this.props;
    return (
      <div className="top-data color03 flex pack-center f14 mt10">
            <div className="item1 t-center">已参与
                <br />{ pageInfo.join_num }</div>
            <div className="item1 t-center center bd03">总投票数
                <br />{ pageInfo.vote_sum }</div>
            <div className="item1 t-center">访问量
                <br />{ pageInfo.page_view }</div>
        </div>
    )
  }
}

class SearchInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      owner_number: "", // 图片
    };
  }

  handelInput(event){
    if( event.target.value == ""){
/*      this.props.actions.initialVoteList();   //初始化投票列表数据
      this.props.actions.getVoteList(1,6)*/
      this.setState({ owner_number:""})
    window.location.href="/dist";      
     /* this.props.actions.traggerScrollFlag();
      this.props.actions.searchFlag(false)*/
    }else{
      this.setState({ owner_number:event.target.value})
    }
  }
  searchList(){
    if( this.state.owner_number == ""){
      return false;
    }
    this.props.actions.searchVoteList(this.state.owner_number)
  }
  render() {
    return (
      <div className="searchbox flex mt10 plr10 f12">
        <input type="text" className="text item1 bgf color02 bdr5 bd02" name="q"  placeholder="搜索小区名称\编号"  onChange = { this.handelInput.bind(this) }/>
        <input type="button" className="submit-btn ml5 bg04 colorf bdr5" value="搜索" onClick={ this.searchList.bind(this) } />
    	</div>
    )
  }
}


class VoteListSearch extends Component {

  componentDidUpdate(){
    let promise = imgIsload(".opt-img"); //获取拿到的 promise
    let that = this;
    Promise.all(promise).then(function() { //待图片加载完成
      waterfall("waterbox", ".pin");
    })

  }
  render() {
    const { VoteList, actions,listloading,nothingFlag } = this.props;
    
      return (
        <div id="waterbox" className="plr5 color02 mt10" style={{height:"auto"}}>
          { VoteList.map( item =>
            <VoteListSection key={ item.id } VoteList = { item } actions = {actions}/>
          )}
            <div className="clearfix"></div>
        </div>
      )
  }
}

class VoteList extends Component {

  static propTypes = {
    VoteList:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired      
  }
  componentDidMount() {

    this.props.actions.initialVoteList();   //初始化投票列表数据
    this.props.actions.getVoteList(1,6)
    this.props.actions.resetScrollFlag()
  }
  componentDidUpdate(){
    let promise = imgIsload(".opt-img"); //获取拿到的 promise
    let that = this;
    Promise.all(promise).then(function() { //待图片加载完成
      waterfall("waterbox", ".pin");
     
      if( that.props.createScrollFlag ){
        that.props.actions.traggerScrollFlag();
        var hei = $(window).height()-$(".bot-nav").height();

        // 创建iscroll之前必须要先设置父元素的高度，否则无法拖动iscroll
        $('#loading, .listloadingClass').height(hei);
        var Listloading = require('../lib/listloading');
        var flg;
        var pageIndex = 1; //初始分页页数
        var pageLimit = 6; //分页每页显示条数
        var listloading = new Listloading('#loading', {
          disableTime: true, // 是否需要显示时间
          pullUpAction: function(cb) { // 上拉加载更多
            if( !that.props.touchBottomFlag ){
              pageIndex++;
              that.props.actions.getVoteList(pageIndex,6)
            }else{
              cb(true)
            }
          },
          pullDownAction: function(cb) { // 下拉刷新
            cb();
          },
          Realtimetxt: '官人不要，请放开我！',
          loaderendtxt: '我是有底线的',
          // iscroll的API 
          iscrollOptions: {
            scrollbars: true // 显示iscroll滚动条
          }
        });
        that.props.actions.setListloading(listloading)

      }else{
        that.props.listloading.refresh();
      }

    })

    window.onresize = function() {
      setFontSize()
      waterfall("waterbox", ".pin");
    }
      
    
  }
  render() {
    const { VoteList, actions,listloading,nothingFlag } = this.props;
    
      return (
        <div id="waterbox" className="plr5 color02 mt10">
          { VoteList.map( item =>
            <VoteListSection key={ item.id } VoteList = { item } actions = {actions}/>
          )}
            <div className="clearfix"></div>
        </div>
      )
  }
}

export default class Index extends Component {

  static propTypes = {
    todos:PropTypes.object.isRequired,
    actions:PropTypes.object.isRequired
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }
  render() {
    const { todos, actions } = this.props;
    if( todos.nothingFlag ){
      return(
        <div id="loading">
          <div className="loading-box">
            <Header />
            <IndexInfo pageInfo = { todos.pageInfo}/>
            <SearchInfo actions = { actions} todos={todos}/>
            <div className="oops">
              <img src={ require('../../public/image/oops.png') } /> 
              <p>空空如也~啥都还没有呢</p>
            </div>
          </div>
        </div>
      )
    }else if(todos.searchFlag){
      return (
        <div id="loading">
          <div> 
            <Header />
            <IndexInfo pageInfo = { todos.pageInfo}/>
            <SearchInfo actions = { actions} todos={todos}/>
            <VoteListSearch VoteList = { todos.vote_list } actions = { actions } nothingFlag={ todos.nothingFlag } createScrollFlag = { todos.createScrollFlag } listloading= { todos.listloading } touchBottomFlag = { todos.touch_bottom_flag }/>
          </div>  
        </div>
      )
    }else{
      return (
        <div id="loading">
          <div>
            <Header />
            <IndexInfo pageInfo = { todos.pageInfo}/>
            <SearchInfo actions = { actions} todos={todos}/>
            <VoteList VoteList = { todos.vote_list } actions = { actions } nothingFlag={ todos.nothingFlag } createScrollFlag = { todos.createScrollFlag } listloading= { todos.listloading } touchBottomFlag = { todos.touch_bottom_flag }/>
          </div>
        </div>
      )
    }
  }
}