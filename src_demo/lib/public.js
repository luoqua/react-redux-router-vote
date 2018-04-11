import FastClick from 'fastClick'

/**
 * 配置对象
 * @type {Object}
 */
var config = {
	basehash: '#!',
	pageSize:10,
	alertTime:'8000', //alert消失的时间
}

/**
 * 字符串帮助类
 */
class strUtil {

	/**
	 * 判断字符串是否为空
	 * @param   str 传入的字符串
	 * @return {Boolean}     
	 */
	static isEmpty = ( str ) => {
		if( str == null || typeof(str) == 'undefined' || (str == '' && typeof(str)!='number' )){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * 是否包含str
	 * @param  {String} str1 [description]
	 * @param  {String} str2 [description]
	 * @return {Boolean} 
	 */
	static hasStr = (str1,str2) => {
		let index = str1.indexOf(str);
		if(index > -1) {
			return true;
		} else {
			return false;
		}
	} 

	/**
	 * 忽略大小写判断字符串是否相同
	 * @param   str1 
	 * @param   str2 
	 * @return {Boolean}   
	 */
	static isEqualsIgnorecase = ( str1, str2 ) => {
		if ( str1.toUpperCase() == str2.toUpperCase() ){
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断是否是数字
	 * @param  value
	 * @return {Boolean}     
	 */
	static isNum = ( str ) => {
		if(!isNaN(str)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断是否是中文
	 * @param  str 
	 * @return {Boolean} 
	 */
	static isChina = (str) => {
		var reg = /^[\u4E00-\u9FA5]+$/;
		if(reg.test(str)) {
			return true;
		}
		return false;
	}

	/**
	 * 字符串反转
	 * @param  str 
	 * @return {str}    
	 */
	static reverse = (str) => {
		return str.split("").reverse().join("");
	}

	/**
	 * 测试是否是整数
	 * @param   str 
	 * @return { Boolean }
	 */
	static isInt = (str) => {
		if(str == "NaN")
			return false;
		return str == parseInt(str).toString();
	}

	/**
	 * 数组是否包含元素
	 * @param  {Array}  arr 
	 * @param  {String} str 
	 * @return {Boolean}  
	 */
	static arrayIndexOf = ( arr = [], str) =>{
		let index = arr.indexOf(str)
		if( index > -1) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 除去左边空白
	 * @param  str 
	 * @return {str}     
	 */
	static lTrim = (str) => {
		return str.replace(/(^\s*)/g,"") // str.replace(/^\s*/g,"")
	}

	/**
	 * 除去右边空白
	 * @param  str 
	 * @return str 
	 */
	static RTrim = (str) => {
		return str.replace(/(\s*$)/g,"")
	}

	/**
	 * 除去两边空白
	 * @param   str 
	 * @return {str}   
	 */
	static trim = (str) => {
		return str.replace(/(^\s*) | (\s*$)/g, "");
	}

	/**
	 * Json转化成字符串
	 * @param  {json} str 
	 * @return {str} 
	 */
	static json2str = (str) => {
		if( !strUtil.isEmpty(str)) return JSON.parse(str);
	}

	/**
	 * 字符串转化成Json
	 * @param   str 
	 * @return {json}   
	 */
	static str2json = (str) => {
		return JSON.stringify(str);
	}

	/**
	 * 截取小数点，四舍五入
	 * @param  {str} str 
	 * @param  {number} number 
	 * @return {str}       
	 */
	static toFixed(str, number) {
		return parseFloat(str).toFixed(number);
	}

	/**
	 * 截取小数点，不进行四舍五入
	 * @param  {str} str   
	 * @param  {number} number
	 * @return {str}        [description]
	 */
	static toDecimal(str, number) {
		let a = '1';
		for (let i = 0;i < number;i++) {
			a += '0';
		}
		let s = Math.floor(parseFloat(str) * a) / a;
		return s;
	}

	/**
	 * 字符串-获取以ASCII 编码字节数 英文占 1字节 中文占2字节
	 * @param   str 
	 * @return {json}   
	 */
	static lenASCII = (str) => {
		return str.replace(/[^\x00-\xff]/g,'xx').length;//将所有非\x00-\xff字符转化为xx两个字符，再计算字符串
	}

	static formatPercent = (str) => {
		let reg = /\%/g
	}



}