import * as types from '../constants/ActionsTypes'
import {
  setFontSize,
  waterfall,
  imgIsload,
  Fetch
} from '../function/common'
export const voteTodo = (id, vote_num) => ({
	type: types.VOTE_TOD,
	id,
	vote_num
})
export const searchList = (id) => ({
	type: types.SEARCH_LIST,
	id
})
//获取投票列表
export const getVoteList = (pageIndex, pageLimit) => {
  return (dispatch, getState) => {
        var opitions = {
        method: "POST",
        body: {
          pageIndex: pageIndex,
          pageLimit: pageLimit
        }
    }
    Fetch('http://bb.wxjysgcd.com/WuHu/Index/getVoteList', opitions)
      .then((data) => {
        if( data != null ){
            dispatch(setVoteList(data))
        }else{
            dispatch(touchBottomFlag())
        }
    })
 }
}
//提交报名信息
export const submitSignInfo = (img_url,owner_address,owner_tel,owner_desc) => {
  return (dispatch,getState) => {
    dispatch(ChangeLoadingshow(true,"数据提交中"))
    var opitions = {
      method:"POST",
      body: {
        owner_pic: img_url, // 图片
        owner_address: owner_address,
        owner_tel: owner_tel,
        owner_desc:owner_desc,
      }
    }
    Fetch( 'http://bb.wxjysgcd.com/WuHu/Index/voteInfoUpload', opitions)
      .then((data) => {
      if( data != null ){
       dispatch(setRankList(data))
      }
    })
  }
}



//获取排名数据
export const getVoteRankList = () => {
  return (dispatch,getState) =>{
    var opitions = {
      method:"POST",
      body: {
        pageLimit: 60,
        pageIndex: 1,
      }
    }
    Fetch('http://bb.wxjysgcd.com/WuHu/Index/getVoteRankList', opitions)
      .then((data) => {
      if( data != null ){
        dispatch(ChangeLoadingshow(false))
        dispatch(ChangeAlertshow(true,"提交成功"))
      }
    })

  }
}



//填充投票列表
export const setVoteList = ( votelist ) => ({
	type:types.SET_VOTELIST,
	votelist:votelist
})
//改变上拉下拉状态
export const traggerScrollFlag = () => ({
  type:types.TRAGGER_SCROOL_FLAG,
})
//存储上拉下拉状态
export const setListloading = ( listloading ) => ({
  type:types.LISTLOADING,
  listloading:listloading
})
//判断是否触底
export const touchBottomFlag = () =>({
  type:types.TOUCH_BOTTOM_FLAG
})
//初始化投票列表数据
export const initialVoteList = () => ({
  type:types.INITIALVOTELIST
})
//充置上拉下拉状态
export const resetScrollFlag = () => ({
  type:types.RESETSCROLLFLAG
})
//获取指定id下的投票数据
export const getVoteListid = ( id ) => ({
  type:types.GET_VOTELIST_ID,
  voteId:id
})
//存储上传的图片
export const SetUploadImg = ( imgurl ) => ({
  type:types.SETUPLOADIMG,
  imgurl:imgurl
})
//获取上传的图片
export const GetUploadImg = () => {
  return (dispatch, getState) => {
    var state = getState();
    return state.todos.uploadImgUrl;
  }
}
//移除已上传的图片
export const RemoveUploadImg = ( index ) => ({
  type:types.REMOVEUPLOADIMG,
  index:index
})

//alert 弹窗
export const ChangeAlertshow = ( show,message ) =>({
  type:types.CHANGEALERTSHOW,
  show:show,
  message:message
})
//初始化图片数组
export const initialUploadImg = () =>({
  type:types.INITIALUPLOADIMG,
})

//alert 控制alert

export const ControlAlertshow = (show,message) =>{
  return (dispatch, getState) => {
    var state = getState();
    if( !state.todos.timerFlag ){
      return false;
    }
    dispatch(ChangeAlertshow(show,message));
    dispatch(setTimer())
    setTimeout(function(){
      dispatch(ChangeAlertshow(false))
      dispatch(setTimer());
    },2000)
 }
}

//loading
export const ChangeLoadingshow = ( show, message) => ({
  type:types.CHANGELOADINGSHOW,
  show:show,
  message:message
})
//设置定时器状态
export const setTimer = () => ({
  type:types.SETTIMER
})
//设置定时器状态
export const setRankList = ( ranklist ) => ({
  type:types.SETTIMER,
  ranklist:ranklist,
})
