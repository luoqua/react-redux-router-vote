import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore  } from 'redux'





const Counter = ({ value, onIncrement, onDecrement}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>	
)

const reducer = (state = 0, action) => {
	switch(action.type){
		case "INCREMENT":return state + 1;
		case "DECREMENT":return state - 1;
		default:return state;
	}
};

const store = createStore(reducer);


function log(){
	console.log.apply(console,arguments);
}

const fetchPosts = postTitle => (dispatch, getState) => {
  dispatch(requestPosts(postTitle));
  return fetch(`/some/API/${postTitle}.json`).then(response => response.json()).then(json => dispatch(receivePosts(postTitle, json)));
  };

function func() {
    console.log('this: '+this);
    console.log('arguments: '+arguments);
    console.log(Array.prototype.slice.call(arguments));
}
var bound = func.bind('abc', 1, 2);
bound(3,4,5)

if (!Function.prototype.construct) {
    Function.prototype.construct = function(argArray) {
        if (! Array.isArray(argArray)) {
            throw new TypeError("Argument must be an array");
        }
        var constr = this;
        var nullaryFunc = Function.prototype.bind.apply(
            constr, [null].concat(argArray));
        return new nullaryFunc();
    };
}

Date.construct([2015,9,17])


var date_func =  Date.bind.apply(Date, [null, 2015, 1, 1]);

log( fetchPosts )

log(store.getState())

var counter = {
    count: 0,
    inc: function () {
        this.count++;
        console.log(this.count)
    }
}

function funcd(){
	this.count = 11;
}

var nodeList = document.querySelectorAll('div');  

[].push.call(nodeList,"2")


console.log(nodeList)

counter.inc.call( new funcd )

var func2 = counter.inc.bind(counter);


function test(){

	[].push.call(arguments,"22");

	console.log( arguments )
}

test(2,2)

const render = () => {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({type:'INCREMENT'})}
			onDecrement={() => store.dispatch({type:'DECREMENT'})}
		/>,
		document.getElementById('root')
	);
};

render();

store.subscribe(render);

