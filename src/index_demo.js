
import style from '../app.css'

var $ = require('jquery');

var img1 = document.createElement("img");
img1.src = "../dist/"+require("./8333.png");
document.body.appendChild(img1);

if (__DEV__) {
  document.write(new Date());
}

const el = document.getElementById('wrapper1');

require.ensure(['./b'],function (require) {
	var content = require('./b');
	var React = content.React;
	var ReactDOM = content.ReactDOM;	
	ReactDOM.render(
		<div>
			<h2 className="h2">hello Webpack</h2>
		</div>,
		el
	)
})

var data = require('data');
$('#wrapper2').text(data);
