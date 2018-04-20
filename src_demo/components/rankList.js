import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

class RankListIndex extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {todos,actions} = this.props;
        actions.getVoteRankList()
    }

	render(){
    const {todos,actions} = this.props;
        console.log(this)
		return( 
           <div className="rank  f14 plr10 mt10 special—color" style={{paddingBottom:"0.35rem"}}>
                <table className="w100">
                    <tbody>
                        <tr>
                            <td>排名</td>
                            <td>小区名称</td>
                            <td>票数</td>
                        </tr>
                        { todos.rankList.map(( item, index )=>
                            <tr key={index}>
                                <td style={{fontSize:"12px"}}>{index*1+1}</td>
                                <td style={{fontSize:"12px"}}>{item.owner_address}</td>
                                <td style={{fontSize:"12px"}}>{item.owner_vote}</td>
                            </tr>
                        )} 
                    </tbody>
                </table>
            </div> 
				)
		}
}

export default class RankList extends Component {
     componentDidMount() {
          
          if( this.props.todos.listloading  != ""){
               this.props.todos.listloading.destroy()       //移除上一组件绑定的 touchmove 事件
          }

          
     }
    render() {
        const { todos, actions }  = this.props;
        return (
            <div id="listloading2">
                <Header />
                <RankListIndex todos={ todos } actions={ actions } />
                <Footer />
            </div>
        )
    }
}