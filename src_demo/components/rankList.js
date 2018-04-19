import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'


export default class RankList extends Component {

	render(){
    const {show,message} = this.props;
    if( !show ) return null;
		return( 
          <div class="rank  f14 plr10 mt10 special—color">
                <table class="w100">
                    <tr>
                        <td>排名</td>
                        <td>小区名称</td>
                        <td>票数</td>
                    </tr>
                    <template v-for="(item,index) in rankList">
                        <tr>
                            <td style="font-size:12px;">{{index*1+1}}</td>
                            <td style="font-size:12px;">{{item.owner_address}}</td>
                            <td style="font-size:12px;">{{item.owner_vote}}</td>
                        </tr>
                    </template>
                </table>
            </div> 
				)
		}
	}
