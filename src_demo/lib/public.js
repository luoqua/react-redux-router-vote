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

	/**
	 * 格式化百分比
	 * @param   str 
	 * @return {str}  
	 */
	static formatPercent = (str) => {
		let reg = /\%/g;
		str = str.toString().replace(reg, '');
		return str;
	}

	 /**
	  * 格式化千分位
	  * @param str
	  * @returns {str}
	  */
	static formatKilo = (str) => {
	   str = str.toString();
	   if (/[^0-9\.]/.test(str)) return "invalid value";
	   str = str.replace(/^(\d*)$/, "$1.");
	   str = str.replace(/(\d*\.\d\d)\d*/, "$1");
	   str = str.replace(".", ",");
	   var re = /(\d)(\d{3},)/;
	   while (re.test(str))
	     str = str.replace(re, "$1,$2");
	   str = str.replace(/.(\d*)$/, ".$1");
	   str = str.substr(str.length - 1, 1) == '.' ? str.substring(0, str.length -
	     1) : str;
	   if (!(/\./.test(str))) {
	     str += '.00';
	   }
	   return str.replace(/^\./, "0.");
	}

	//获取唯一标识符
	static getGuid = () => {
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,function(c) {
			var c = Math.random() * 16 | 0;
				v = c == 'x' ? r : (r &0x3 | 0x8);
			return v.toString(16);
		})
	}

	/**
	 * 格式化字符串
	 * @param  {[type]} str       
	 * @param  {String} type        [格式化的类型 name telephone identity]
	 * @param  {String} punctuation [description]
	 * @return {str}             
	 */
	static formatStr = ( str, type = 'name', punctuation = '*') => {
		str = str.split('');
		var newStr = [];
		for (var i = 0; i < str.length; i++) {
			if( type = 'name') {
				if( i == 0 ){
					newStr.push(str[i]);
				} else {
					newStr.push(punctuation);
				}
			} else if ( type == 'telephone') {
				if( i >2 && i <7) {
					newStr.push(punctuation);
				} else {
					newStr.push(str[i]);
				}
			}else if( type == 'identity') {
				if(i > 5 && i < 14){
					newStr.push(punctuation);
				} else {
					newStr.push(str[i]);
				}
			}
		}
		return newStr.join('');
	}

	//清除Html标签文本
	static clearHtml = ( str ) => {
		var reg = /<[^<>]+>/g;
		return str.replace(reg, '');
	}

	/**
	 * 金钱取万
	 * @param  {[type]} money [description]
	 * @return {[type]}       [description]
	 */
	static formatMiriade = (money) => {
		var money = parseFloat(money);
		var str;
		if( money >= 10000 ) {
			str = ( money / 10000 ).toFixed() + '万';
		} else {
			str = money + '元';
		}
		return str;
	}

	/**
	 * 累投金额格式化，取出亿和万
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	static formatMoney = (str) => {
		let reg = /\,/g;
		let number = parseFloat(str.replace(reg, ''));
		let Num = new Object();
		Num.hundredMollion = Math.floor(number / 100000000 ); //获取亿
		Num.kiloMillion = Math.floor(number % 100000000 /10000 );//获取万
		return Num;
	}

	/**
	 * 平台人数格式化，取出万和单个
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	static formatPerson = (str) => {
		let reg = /\,/g;
		let number = parseFloat(str.toString().replace(reg,''));
		let Num = new Object();
		Num.million = Math.floor(number/ 10000); //获取万
		Num.single = Math.floor(number % 10000);// 获取单个
		return Num;
	}

	//格式化数据
	static formatData = (obj,prop) => {
		let s = '';
		try{
			s = obj[prop];
		}catch(error){
			s = '';
		}
		return s;
	}


/**
 * 时间帮助类
 */
class dateUtil {

	/**
	 * 获取当前时间
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getTime = (time) => {
		if( strUtil.isEmpty(time)) {
			return new Date();
		} else {
			time = time.replace(/-/g,"/");
			time = time.replace(/\.\d/g,"");
			return new Date(time);
		}
	}

	/**
	 * 获取年份 如 2015
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getFullYear = (time) => {
		return dateUtil.getTime(time).getFullYear();
	}

	/**
	 * 获取年份 如 115
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getYear = (time) => {
		return dateUtil.getTime(time).getMonth();
	}

	/**
	 * 获取年份 返回 0-11 0 表示一月 11表示十二月
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getMonth = (time) => {
		return dateUtil.getTime(time).getDay();
	}

	/**
	 * 获取当天日期
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getWeek = (time) => {
		return dateUtil.getTime(time).getDate();
	}	

	/**
	 * 获取小时数
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getHours = (time) => {
		return dateUtil.getTime(time).getHours();
	}

	/**
	 * 获取分钟数
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getMinutes = (time) => {
		return dateUtil.getTime(time).getMinutes();
	}

	/**
	 * 获取秒数
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	static getSeconds = (time) => {
		return dateUtil.getTime(time).getSeconds(); //获取秒数
	}

	/**
  * 获取当前日期：
  * formatStr：可选，格式字符串，默认格式：yyyy-MM-dd hh:mm:ss
  * 约定如下格式：
  * （1）YYYY/yyyy/YY/yy 表示年份
  * （2）MM/M 月份
  * （3）W/w 星期
  * （4）dd/DD/d/D 日期
  * （5）hh/HH/h/H 时间
  * （6）mm/m 分钟
  * （7）ss/SS/s/S 秒
  * （8）iii 毫秒
  */
	static formatDate = (formatStr, time) => {
   var str = formatStr;
   if (!formatStr) {
     str = "yyyy-MM-dd hh:mm:ss"; //默认格式
   }
   var Week = ['日', '一', '二', '三', '四', '五', '六'];
   str = str.replace(/yyyy|YYYY/, dateUtil.getFullYear(time));
   str = str.replace(/yy|YY/, (dateUtil.getYear(time) % 100) > 9 ? (dateUtil
     .getYear(time) % 100).toString() : '0' + (dateUtil.getYear(time) % 100));
   str = str.replace(/MM/, dateUtil.getMonth(time) >= 9 ? (parseInt(dateUtil
     .getMonth(time)) + 1).toString() : '0' + (parseInt(dateUtil.getMonth(
     time)) + 1));
   str = str.replace(/M/g, (parseInt(dateUtil.getMonth(time)) + 1));
   str = str.replace(/w|W/g, Week[dateUtil.getWeek(time)]);
   str = str.replace(/dd|DD/, dateUtil.getDate(time) > 9 ? dateUtil.getDate(
     time).toString() : '0' + dateUtil.getDate(time));
   str = str.replace(/d|D/g, dateUtil.getDate(time));
   str = str.replace(/hh|HH/, dateUtil.getHours(time) > 9 ? dateUtil.getHours(
     time).toString() : '0' + dateUtil.getHours(time));
   str = str.replace(/h|H/g, dateUtil.getHours(time));
   str = str.replace(/mm/, dateUtil.getMinutes(time) > 9 ? dateUtil.getMinutes(
     time).toString() : '0' + dateUtil.getMinutes(time));
   str = str.replace(/m/g, dateUtil.getMinutes(time));
   str = str.replace(/ss|SS/, dateUtil.getSeconds(time) > 9 ? dateUtil.getSeconds(
     time).toString() : '0' + dateUtil.getSeconds(time));
   str = str.replace(/s|S/g, dateUtil.getSeconds(time));
   str = str.replace(/iii/g, dateUtil.millSecond < 10 ? '00' + dateUtil.millSecond :
     (dateUtil.millSecond < 100 ? '0' + dateUtil.millSecond : dateUtil.millSecond)
   );
   return str;
 	}

 	static isLeapYear = (str) => {
 		return (str % 4 == 0 && ((str !=0 ) || (str % 400 == 0)));
 	}
}

class navigatorUtil {
	
}