webpackJsonp([2],{153:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o(0),i=l(r),u=l(o(1)),a=(l(o(33)),l(o(59))),s=l(o(60));(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e})(o(58)),o(11),o(20),l(o(65)),l(o(66)),l(o(67));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"componentDidMount",value:function(){var e=this;void 0!=this.props.actions.listloading&&this.props.actions.listloading.destroy(),this.props.router.setRouteLeaveHook(this.props.route,function(){void 0!=e.props.actions.listloading&&e.props.actions.listloading.destroy()})}},{key:"render",value:function(){var e=this.props,t=e.todos,o=e.actions;return i.default.createElement("div",null,i.default.createElement(a.default,{actions:o,todos:t}),i.default.createElement(s.default,null))}}]),t}();c.propTypes={todos:u.default.object.isRequired,actions:u.default.object.isRequired},t.default=c}});