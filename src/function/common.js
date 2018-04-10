/**
 * 设置页面 fontSize
 */
export function setFontSize() {

	var winW = window.innerWidth;
	if(winW>375){winW=375}
	document.documentElement.style.fontSize = parseInt(winW/3.2)+'px'

}

/**
 * 瀑布流效果实现
 * @param  {[string]} parent 父元素
 * @param  {[string]} item   子元素	
 * @return {[type]}        [description]
 */
export function waterfall( parent, item ) {

	var parentNode = document.getElementById(parent);
	var childNode =[].slice.call(document.querySelectorAll(item));

	if( parentNode == undefined || childNode == undefined || childNode.length == 0){
			return false;
	}
	var parentW = parentNode.offsetWidth;
	var childW = childNode[0].offsetWidth;

	var num = Math.floor( parentW/childW );		//计算每行放几个块

	var boxA = [];														//存放块的数组

	childNode.map(function( item, index ){

		if( index < num ){
			//将第一行的块的高度放入块数组当中
			boxA.push( item.offsetHeight );

		}else{
			//将后续的块放入上一次块高度最小的下面
			var minH = Math.min.apply(null, boxA); //取得块数组当中最小的块高度
			var minIndex = boxA.indexOf(minH);

			item.style.position="absolute";
			item.style.top=minH*1+10+"px";

			item.style.width = childW+"px";

			item.style.left = childNode[minIndex].offsetLeft + "px";

			boxA[ minIndex ] += item.offsetHeight+10;

			var maxH = Math.max.apply(null, boxA);

			parentNode.style.height =   maxH +10+ "px";

			return item;
		}
		

	})

}

/**
 * 	判断图片是否加载完成
 * @param  {String} elment   选择图片节点
 * @return {[Array]}    返回 Promise 对象
 */
export function imgIsload( elment = '') {

	if( elment == undefined && element == ''){
		console.error('img src is undefined');
	}
	
	var imgNode = document.querySelectorAll( elment );

	imgNode = [].slice.call( imgNode );

	// 返回
	return imgNode.map(function( item, index ){

			return new Promise((resolve, reject)=>{

				item.onload = function(){
					resolve(item)

				}
			})
	})
}

/**
 * 封装好的 fetch 请求数据
 * @param {[string]} url   请求的 url 地址
 * @param {[object]} options 请求的 参数
 */
export function Fetch( url, options ){

  var formData = new FormData();
  
  for( var key in options.body ){
  	formData.append( key, options.body[key] );
  }

	options.body = formData;
	const defer = new Promise(( resolve, reject ) => {
		fetch(url,options)
			.then((response) => response.json())
			.then((data) => {
				if( data.status == 1) {
					resolve(data.data)	//返回成功数据
				}else{
					reject(data) //返回失败数据
				}
			})
			.catch(error => {
        //捕获异常
        console.log(error.msg)
        reject() 
      })
	})
 	return defer

}



