
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>listLoading</title>
<link rel="stylesheet" type="text/css" href="../src/css/base.css" />
<link rel="stylesheet" type="text/css" href="../dist/css/listloading.min.css" />
<script src="../src/jslib/require.js"></script>
<script src="iconfont.js"></script>
<script>

require(['zepto', 'iscroll', 'listloading'], function(){
    var Listloading = require('listloading');
    var m = 3;
    var n = 0;
    var hei = $(window).height();
    var arr = ['baby_food', 'carrycot', 'feeding_bottle', 'feeding_bottle2', 'tricycle', 'rattle', 'rattle6', 'mobile', 'pin', 'safety_seat', 'pin']
    // 创建iscroll之前必须要先设置父元素的高度，否则无法拖动iscroll
    $('#listloading, .listloadingClass').height(hei);

    // 模板
    var createHtml = function(){
        var __html = '', now, x;
        for(var i = 0; i < 15; i++){
            now = new Date().getTime();
            now = new Date(now + i*1000000);
            x = Math.random().toString().substring(2,3);
            __html += '<li><span className="icon">' + 
                '<svg className="svg-icon" aria-hidden="true">\
                  <use xlink:href="#icon-' + arr[x] + '"></use>\
                </svg>'
            +'</span><p className="title"><time className="r">' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '</time>listloading' + (n++) + '</p><p className="text">移动端上拉下拉刷新组件...</li>';
        }
        return __html;
    }
    // demo
    var listloading = new Listloading('#listloading', {
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多
            m--;
            var flg = false;
            var __html = createHtml();
            if(m < 1){
                flg = true;
            }else{
                $('#order-list').append(__html);
            }
            // 数据加载完毕需要返回 end为true则为全部数据加载完毕
            cb(flg);
            
        },
        pullDownAction : function(cb, flg){  // 下拉刷新
            // true则为默认加载 false为下拉刷新
            if (flg) {
                console.log('默认加载');
            }
            m = 3;
            var __html = createHtml();
            $('#order-list').html(__html);
            // 执行完执行方法之后必须执行回调 回调的作用是通知默认加载已经全部执行完毕，程序需要去创建iscroll或者做下拉刷新动作
            cb();
        },
        Realtimetxt: '官人不要，请放开我！',
        loaderendtxt: '我是有底线的',
        // iscroll的API 
        iscrollOptions: {
            scrollbars: false   // 显示iscroll滚动条
        }
    });

    // 点击事件
    listloading.evt('li', 'click', function (dom) {
        dom.remove();
        // $('#order-list').append(createHtml());
        listloading.refresh();
    });
    
    // demo
    // var k = 3;
    // var listloadingClass = new Listloading('.listloadingClass', {
    //     pullUpAction : function(cb){   //上拉加载更多
    //         k--;
    //         var flg = false;
    //         var __html = createHtml();
    //         if(k < 1){
    //             flg = true;
    //         }else{
    //             $('#listloadingClass-order-list').append(__html);
    //         }
    //         // 数据加载完毕需要返回 end为true则为全部数据加载完毕
    //         cb(flg);
            
    //     },
    //     pullDownAction : function(cb, flag){  //下拉刷新
    //         // flag 为true 第一次加载
    //         if (flag) {
    //             // dosomething...
    //         }
    //         k = 3;
    //         var __html = createHtml();
    //         $('#listloadingClass-order-list').html(__html);
    //         // 执行完执行方法之后必须执行回调 回调的作用是通知默认加载已经全部执行完毕，程序需要去创建iscroll
    //         cb();
    //     }
    // });
    var li = document.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        li[i].onclick = (function(i) {
            return function () {
                console.log(i)
            }
        })(i);
    }

});
require.config({
    paths: {
        "zepto": "../src/jslib/zepto.min",
        "iscroll": "../src/jslib/iscroll.min",
        "listloading": "../dist/js/listloading.min"
    }
});
</script>
</head>
<body>
<style type="text/css">
body{
    background:#E6E6E6;
}
#listloading{
    overflow:hidden;
}
.order-list>li{
    height:50px;
    line-height:24px;
    padding:10px 15px 10px 10px;
    margin:10px;
    border-radius:3px;
    box-shadow:1px 1px 2px #ccc;
    background:#fff;
}
.order-list>li>span.icon{
    float:left;
    width:50px;
    height:50px;
    line-height:50px;
    margin-right:10px;
    border-radius:50%;
    background:#FFC107;
    text-align:center;
    font-size:36px;
}
.svg-icon{
    width: 1em; height: 1em;
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
}


.order-list>li>.title{
    font-size:16px;
    color:#292929;
}
.order-list>li>.title>time.r{
    color:#666;
    font-size:12px;
}
.order-list>li>.text{
    color:#7B7B7B;
}
.listloadingClass{
    overflow:hidden;
}
</style>
<div id="listloading">
    <div>
        <ul id="order-list" className="order-list"></ul>
    </div>


    <ul id="order-list" className="order-list">
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">10:57:56</time>listloading0</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-feeding_bottle2"></use>                </svg></span>
        <p className="title">
            <time className="r">11:14:36</time>listloading1</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-feeding_bottle"></use>                </svg></span>
        <p className="title">
            <time className="r">11:31:16</time>listloading2</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">11:47:56</time>listloading3</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-rattle"></use>                </svg></span>
        <p className="title">
            <time className="r">12:4:36</time>listloading4</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-feeding_bottle2"></use>                </svg></span>
        <p className="title">
            <time className="r">12:21:16</time>listloading5</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-baby_food"></use>                </svg></span>
        <p className="title">
            <time className="r">12:37:56</time>listloading6</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-safety_seat"></use>                </svg></span>
        <p className="title">
            <time className="r">12:54:36</time>listloading7</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-mobile"></use>                </svg></span>
        <p className="title">
            <time className="r">13:11:16</time>listloading8</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">13:27:56</time>listloading9</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-baby_food"></use>                </svg></span>
        <p className="title">
            <time className="r">13:44:36</time>listloading10</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-rattle"></use>                </svg></span>
        <p className="title">
            <time className="r">14:1:16</time>listloading11</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">14:17:56</time>listloading12</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-baby_food"></use>                </svg></span>
        <p className="title">
            <time className="r">14:34:36</time>listloading13</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-rattle"></use>                </svg></span>
        <p className="title">
            <time className="r">14:51:16</time>listloading14</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-feeding_bottle"></use>                </svg></span>
        <p className="title">
            <time className="r">11:9:17</time>listloading15</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-safety_seat"></use>                </svg></span>
        <p className="title">
            <time className="r">11:25:57</time>listloading16</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use>                </svg></span>
        <p className="title">
            <time className="r">11:42:37</time>listloading17</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-baby_food"></use>                </svg></span>
        <p className="title">
            <time className="r">11:59:17</time>listloading18</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use>                </svg></span>
        <p className="title">
            <time className="r">12:15:57</time>listloading19</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">12:32:37</time>listloading20</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-baby_food"></use>                </svg></span>
        <p className="title">
            <time className="r">12:49:17</time>listloading21</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-mobile"></use>                </svg></span>
        <p className="title">
            <time className="r">13:5:57</time>listloading22</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-rattle"></use>                </svg></span>
        <p className="title">
            <time className="r">13:22:37</time>listloading23</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use>                </svg></span>
        <p className="title">
            <time className="r">13:39:17</time>listloading24</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-safety_seat"></use>                </svg></span>
        <p className="title">
            <time className="r">13:55:57</time>listloading25</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-rattle6"></use>                </svg></span>
        <p className="title">
            <time className="r">14:12:37</time>listloading26</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">14:29:17</time>listloading27</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-carrycot"></use>                </svg></span>
        <p className="title">
            <time className="r">14:45:57</time>listloading28</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
    <li><span className="icon"><svg className="svg-icon" aria-hidden="true">                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-feeding_bottle2"></use>                </svg></span>
        <p className="title">
            <time className="r">15:2:37</time>listloading29</p>
        <p className="text">移动端上拉下拉刷新组件...</p>
    </li>
</ul>
</div>
<!-- <div className="listloadingClass">
    <div>
        <ul id="listloadingClass-order-list" className="order-list"></ul>
    </div>
</div> -->
</body>
</html>
