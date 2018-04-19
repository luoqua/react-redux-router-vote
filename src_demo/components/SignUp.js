import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import reset from '../../public/css/reset.css'
import css from '../../public/css/css.css'
import plupload from 'plupload'


let accessid = ''
let accesskey = ''
let host = ''
let policyBase64 = ''
let signature = ''
let callbackbody = ''
let filename = ''
let key = ''
let expire = 0
let g_object_name = ''
let g_object_name_type = ''
let timestamp
let now = timestamp = Date.parse(new Date()) / 1000;

class SignUpIndex extends Component {
	
	 constructor(props) {
	 	super(props)
	 	let { actions, todos } = this.props;
		let uploadImgUrl = actions.GetUploadImg();
        this.state = {
            owner_pic: "", // 图片
	        owner_address:  "",
	        owner_tel:  "",
	        owner_desc: "",
	        uploadImgUrl:uploadImgUrl,
        };
     }

	componentDidMount() {
	    
	    const { actions, todos } = this.props;
	    var uploadImgList = []
	    var that = this;
	    var uploader = new plupload.Uploader({
	        runtimes: 'html5,flash,silverlight,html4',
	        browse_button: 'selectfiles',
	        //multi_selection: false,
	        container: document.getElementById('container'),
	        flash_swf_url: '../../public/js/lib/plupload-2.1.2/js/Moxie.swf',
	        silverlight_xap_url: '../../public/js/lib/plupload-2.1.2/js/Moxie.xap',
	        url: 'http://oss.aliyuncs.com',
	        filters: {
	            mime_types: [ //只允许上传图片和zip,rar文件
	                { title: "Image files", extensions: "jpg,gif,png,bmp,jpeg" },
	                { title: "Zip files", extensions: "zip,rar" }
	            ],
	            max_file_size: '10mb', //最大只能上传10mb的文件
	            prevent_duplicates: false //不允许选取重复文件
	        },

	        init: {
	            PostInit: function() {
	                

	            },

	            FilesAdded: function(up, files) {

	                set_upload_param(uploader, '', false);
	            },

	            BeforeUpload: function(up, file) {
	                check_object_radio();
	                set_upload_param(up, file.name, true);
	            },

	            UploadProgress: function(up, file) {
	                actions.ChangeLoadingshow(true,"图片上传中")
	            },

	            FileUploaded: function(up, file, info) {
	                if (info.status == 200) {
	                    actions.ChangeLoadingshow(false)
		                var imgUrl = "http://jys-weixin.oss-cn-shanghai.aliyuncs.com/" + get_uploaded_object_name(file.name)+"?x-oss-process=style/compress"
	                    actions.SetUploadImg(imgUrl)
	                }
	            },

	            Error: function(up, err) {
	                alert(err.code)
	                if (err.code == -600) {
	                    document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
	                } else if (err.code == -601) {
	                    document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
	                } else if (err.code == -602) {
	                    document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
	                } else {
	                    document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
	                }
	            }
	        }
	    });

	    uploader.init();
	}

	submitSignInfo(){
		let owner_address,owner_tel,owner_pic,owner_desc;

		owner_pic = this.props.todos.uploadImgUrl.join(",");
		
		if(owner_pic == ""){
			this.props.actions.ControlAlertshow(true,"请先上传自己的美居图片");
			return false;
		}

		if( this.state.owner_address == ""){
			this.props.actions.ControlAlertshow(true,"请先输入装修地址");
			return false;
		}

		if( this.state.owner_tel == ""){
			this.props.actions.ControlAlertshow(true,"请先输入手机号");
			return false;
		}else{
			 owner_tel = this.state.owner_tel;
			 if(! /^[1][3,4,5,7,8][0-9]{9}$/.test(owner_tel)){
			 	this.props.actions.ControlAlertshow(true,"请输入正确格式的手机号码");
				return false;
			 }
		}

		if( this.state.owner_desc == ""){
			this.props.actions.ControlAlertshow(true,"请先输入作品描述");
			return false;
		}else{
			owner_desc = this.state.owner_desc;
		}

		this.props.actions.submitSignInfo(owner_pic,owner_address,owner_tel,owner_desc)
		this.refs.input_address.value="";
		this.refs.input_tel.value="";
		this.refs.input_desc.value="";
		let uploadImgUrl=[];
		this.setState({uploadImgUrl:uploadImgUrl})
		this.props.actions.initialUploadImg()
	}

	onhandleInput(name,e) {
		
	    
	    for( var i in this.state) {
	    	if( i == name) {
	    		this.state[i] = e.target.value;
	    	}
	    }
	    
	}
	render() {
		let { actions, todos } = this.props;
		return (
			<section id="login-form" className="csbm">
			    <h3>参赛报名处</h3>
			    <form id="addFrom" action="" method="post" >
			        <ul>
			            <li>
			                <div className="fl w_300"><span className="red">*</span>上传您的美居的清晰照片（1-3张）：</div>
			                <input type="radio" name="myradio" value="random_name"  defaultChecked="checked"/>
			                <div className="post-upload">
			                    <div className="post-upload-box">
			                        <div id="post-upload-main" className="post-upload-main post-upload-text clearfix">
			                        <span id="preview" className="post-upload-upload-preview"></span>
			                        	{this.state.uploadImgUrl.map(( item, index)=>
		                            		<div className="post-upload-upload-preview-item" key={{index}} style={{backgroundImage:'url('+item }}>
                                              <a href="javascript:void(0);" onClick={() => actions.RemoveUploadImg(index) } >[X]</a>
                                            </div>	
		                            	)}
			                            <div className="post-upload-button">
			                                <div id="container" className="post-upload-btn-addpic" >
				                                <i className="post-upload-plus"></i> 
				                                <a id="selectfiles" className="btn" >
				                                </a>
			                                </div>
		                            	
			                            </div>
			                        </div>
			                        <div id="uploadInf" className="post-upload-inf" ></div>
			                    </div>
			                </div>
			            </li>
			        </ul>
			        <ul>
			            <li>
			                <div className="fl" style = {{width: "25%"}} ><span className="red">*</span>小区名称</div>
			                <div className="tjnr">
			                    <input type="text" placeholder="填写您的美居的小区名称" className="w_100 text01"  ref="input_address" onChange={ this.onhandleInput.bind(this,"owner_address") } />
			                </div>
			            </li>
			            <li>
			                <div className="fl" style = {{width: "25%"}}><span className="red">*</span>联系电话</div>
			                <div className="tjnr">
			                    <input type="tel" placeholder="填写联系人手机号码" className="w_100 text01" ref="input_tel"   onChange={ this.onhandleInput.bind(this,"owner_tel") }  />
			                </div>
			            </li>
			            <li>
			                <div className="fl w_300"><span className="red">*</span>作品简介</div>
			                <div className="xynr w_full">
			                    <textarea type="text" data-validate="true" data-required="true" d="" id="bmdesc" ref="input_desc" name="bmdesc"    placeholder="填写参赛作品的简介与描述，为自己拉票" rows="4" className="xynrt" onChange={ this.onhandleInput.bind(this,"owner_desc") } ></textarea>
			                </div>
			            </li>
			            <li className="mid">
			                <input type="hidden" name="formhash" value="894bf97e" />
			                <input type="hidden" name="tomhash" value="587952" />
			                <input type="hidden" name="vid" value="2" />
			                <input type="hidden" name="act" value="add2" />
			                <input type="button" name="submit" value="提交报名" id="submit" className="tjbutton id_add_form_btn" onClick={()=> this.submitSignInfo()}/>
			            </li>
			            <li className="lastform">
			                *为必填项
			            </li>
			        </ul>
			    </form>
			</section>
		)
	}
}

SignUpIndex.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default class SignUp extends Component {
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
				<SignUpIndex todos={ todos } actions={ actions } />
				<Footer />
			</div>
		)
	}
}

function send_request() {
        var xmlhttp = null;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (xmlhttp != null) {
            let serverUrl = 'http://bb.wxjysgcd.com/WuHu/Index/ossUpload'
            xmlhttp.open("GET", serverUrl, false);
            xmlhttp.send(null);
            return xmlhttp.responseText
        } else {
            alert("Your browser does not support XMLHTTP.");
        }
    };

    function check_object_radio() {
        var tt = document.getElementsByName('myradio');
        for (var i = 0; i < tt.length; i++) {
            if (tt[i].checked) {
                g_object_name_type = tt[i].value;
                break;
            }
        }
    }

    function get_signature() {
        //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲

        now = timestamp = Date.parse(new Date()) / 1000;
        
        if (expire < now + 3) {
            let body = send_request()
            var obj = eval("(" + body + ")");
            host = obj['host']
            policyBase64 = obj['policy']
            accessid = obj['accessid']
            signature = obj['signature']
            expire = parseInt(obj['expire'])
            callbackbody = obj['callback']
            key = obj['dir']
            return true;
        }
        return false;
    };

    function random_string(len) {　　
        len = len || 32;　　
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';　　
        var maxPos = chars.length;　　
        var pwd = '';　　
        for (let i = 0; i < len; i++) {　　
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    function get_suffix(filename) {
        let pos = filename.lastIndexOf('.')
        let suffix = ''
        if (pos != -1) {
            suffix = filename.substring(pos)
        }
        return suffix;
    }

    function calculate_object_name(filename) {
        if (g_object_name_type == 'local_name') {
            g_object_name += "${filename}"
        } else if (g_object_name_type == 'random_name') {
            let suffix = get_suffix(filename)
            g_object_name = key + random_string(10) + suffix
        }
        return ''
    }

    function get_uploaded_object_name(filename) {

        if (g_object_name_type == 'local_name') {
            tmp_name = g_object_name
            tmp_name = tmp_name.replace("${filename}", filename);
            return tmp_name
        } else if (g_object_name_type == 'random_name') {
            return g_object_name
        }
    }

    function set_upload_param(up, filename, ret) {
        if (ret == false) {
            ret = get_signature()
        }
        g_object_name = key;
        if (filename != '') {
            let suffix = get_suffix(filename)
            calculate_object_name(filename)
        }
        let new_multipart_params = {
            'key': g_object_name,
            'policy': policyBase64,
            'OSSAccessKeyId': accessid,
            'success_action_status': '200', //让服务端返回200,不然，默认会返回204
            'callback': callbackbody,
            'signature': signature,
        };
        up.setOption({
            'url': host,
            'multipart_params': new_multipart_params
        });

        up.start();
    }