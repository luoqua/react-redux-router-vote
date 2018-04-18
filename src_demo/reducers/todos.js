import {
	VOTE_TODO,
	SEARCH_LIST,
	SET_VOTELIST,
	GET_VOTELIST,
	TRAGGER_SCROOL_FLAG,
	LISTLOADING,
	TOUCH_BOTTOM_FLAG,
	INITIALVOTELIST,
	RESETSCROLLFLAG,
	GET_VOTELIST_ID,
	SETUPLOADIMG,
	GETUPLOADIMG,
	REMOVEUPLOADIMG,
	CHANGEALERTSHOW
} from '../constants/ActionsTypes'

const initialState = {
	vote_list: [],
	pageInfo:{
		join_num:70,
		vote_sum:10000,
		page_view:25000,
	},
	createScrollFlag:true,
	listloading:"",
	touch_bottom_flag:false,
	vote_list_id:"",
	uploadImgUrl:[],
	alertShow:false,
}

export default function todos(state = initialState, action) {
	switch (action.type) {
		case VOTE_TODO:
			return state.vote_list.map(todo =>
			todo.id == action.id ? { ...todo,owner_vote: action.owner_vote++} : todo)

		case SET_VOTELIST:
			return { ...state,vote_list:[ ...state.vote_list, ...action.votelist ] }
		
		case TRAGGER_SCROOL_FLAG:
			return { ...state, createScrollFlag:!state.createScrollFlag}

		case LISTLOADING:
			return { ...state,listloading:action.listloading}		

		case TOUCH_BOTTOM_FLAG:
			return { ...state,touch_bottom_flag:true}

		case INITIALVOTELIST:
			return { ...state, vote_list:[]}

		case RESETSCROLLFLAG:
			return { ...state,createScrollFlag:true}

		case GET_VOTELIST_ID:
			return { ...state,vote_list_id:state.vote_list.filter( todo => 
				todo.id === action.voteId
			)}
		case SETUPLOADIMG:
			return { ...state,uploadImgUrl:state.uploadImgUrl.push(action.imgurl) ? state.uploadImgUrl : action.imgurl}

		case REMOVEUPLOADIMG:
			return { ...state,uploadImgUrl:state.uploadImgUrl.splice(action.index,1) ? state.uploadImgUrl : state.uploadImgUrl}

		case CHANGEALERTSHOW:

			return {...state,alertShow : action.status}
			default:
			return state
	}
}