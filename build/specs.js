(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().textContent).toEqual('Hello world!');
  });

});
},{"./../app/App.js":"/Users/joemccann/Documents/workspace/github-by-lang/app/App.js","react-addons":"react-addons"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */

var Footer = require('./components/Footer.react');
var Header = require('./components/Header.react');
var MainSection = require('./components/MainSection.react');
var React = require('react');
var GHStore = require('./stores/GHStore');


/**
 * Retrieve the current Github data from the Github Store -- not implemented yet
 */
function getGithubOutputState() {
  return {
    recentData: GHStore.getRecentData(),
  };
}

var App = React.createClass({displayName: "App",

/*
  getInitialState: function() {
    return getGithubOutputState();
  },

  componentDidMount: function() {
    GHStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GHStore.removeChangeListener(this._onChange);
  },

*/

  /**
   * @return {object}
   */
  render: function() {
  	return (
      React.createElement("div", null, 
        React.createElement(Header, null), 
        React.createElement(MainSection, null), 
        React.createElement(Footer, null)
      )
  	);
  },

  /**
   * Event handler for 'change' events coming from the GHStore -- not implemented yet
   */
  _onChange: function(){ console.warn('not implemented yet')}

});

	
module.exports = App;

},{"./components/Footer.react":"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Footer.react.js","./components/Header.react":"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Header.react.js","./components/MainSection.react":"/Users/joemccann/Documents/workspace/github-by-lang/app/components/MainSection.react.js","./stores/GHStore":"/Users/joemccann/Documents/workspace/github-by-lang/app/stores/GHStore.js","react":"react"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Footer.react.js":[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var Footer = React.createClass({displayName: "Footer",

  /**
   * @return {object}
   */
  render: function() {

  	return (
      React.createElement("footer", {id: "footer"}, 
        "Courtesy of ", React.createElement("a", {href: "https://nodesource.com"}, "NodeSource"), "."
      )
    );
  }

});

module.exports = Footer;
},{"react":"react"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Header.react.js":[function(require,module,exports){
var React = require('react');

var Header = React.createClass({displayName: "Header",

  /**
   * @return {object}
   */
  render: function() {
    return (
      React.createElement("header", {id: "header"}, 
        React.createElement("h1", null, "Top Github Repos By Programming Language")
      )
    );
  },

});

module.exports = Header;
},{"react":"react"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/components/MainSection.react.js":[function(require,module,exports){
var React = require('react');

var MainSection = React.createClass({displayName: "MainSection",


  /**
   * @return {object}
   */
  render: function() {
    return (
      React.createElement("section", {id: "main"}
      )
    );
  },


});

module.exports = MainSection;
},{"react":"react"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/stores/GHStore.js":[function(require,module,exports){
// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');

// var CHANGE_EVENT = 'change';

// var _todos = {};

// /**
//  * Create a TODO item.
//  * @param  {string} text The content of the TODO
//  */
// function create(text) {
//     // Hand waving here -- not showing how this interacts with XHR or persistent
//     // server-side storage.
//     // Using the current timestamp + random number in place of a real id.
//     var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
//     _todos[id] = {
//         id: id,
//         complete: false,
//         text: text
//     };
// }

// /**
//  * Update a TODO item.
//  * @param  {string} id
//  * @param {object} updates An object literal containing only the data to be
//  *     updated.
//  */
// function update(id, updates) {
//     _todos[id] = assign({}, _todos[id], updates);
// }


// var GHStore = assign({}, EventEmitter.prototype, {

//     /**
//      * Tests whether all the remaining TODO items are marked as completed.
//      * @return {boolean}
//      */
//     areAllComplete: function() {
//         for (var id in _todos) {
//             if (!_todos[id].complete) {
//                 return false;
//             }
//         }
//         return true;
//     },

//     /**
//      * Get the entire collection of TODOs.
//      * @return {object}
//      */
//     getAll: function() {
//         return _todos;
//     },

//     emitChange: function() {
//         this.emit(CHANGE_EVENT);
//     },

//     /**
//      * @param {function} callback
//      */
//     addChangeListener: function(callback) {
//         this.on(CHANGE_EVENT, callback);
//     },

//     /**
//      * @param {function} callback
//      */
//     removeChangeListener: function(callback) {
//         this.removeListener(CHANGE_EVENT, callback);
//     }
// });

// // Register callback to handle all updates
// AppDispatcher.register(function(action) {
//     var text;

//     switch (action.actionType) {
//         case TodoConstants.TODO_CREATE:
//             text = action.text.trim();
//             if (text !== '') {
//                 create(text);
//             }
//             TodoStore.emitChange();
//             break;

//         case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
//             if (TodoStore.areAllComplete()) {
//                 updateAll({
//                     complete: false
//                 });
//             } else {
//                 updateAll({
//                     complete: true
//                 });
//             }
//             TodoStore.emitChange();
//             break;

//         case TodoConstants.TODO_UNDO_COMPLETE:
//             update(action.id, {
//                 complete: false
//             });
//             TodoStore.emitChange();
//             break;

//         case TodoConstants.TODO_COMPLETE:
//             update(action.id, {
//                 complete: true
//             });
//             TodoStore.emitChange();
//             break;

//         case TodoConstants.TODO_UPDATE_TEXT:
//             text = action.text.trim();
//             if (text !== '') {
//                 update(action.id, {
//                     text: text
//                 });
//             }
//             TodoStore.emitChange();
//             break;

//         case TodoConstants.TODO_DESTROY:
//             destroy(action.id);
//             TodoStore.emitChange();
//             break;

//         case TodoConstants.TODO_DESTROY_COMPLETED:
//             destroyCompleted();
//             TodoStore.emitChange();
//             break;

//         default:
//             // no op
//     }
// });

// module.exports = GHStore;
},{}]},{},["./specs/App-spec.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyIsImFwcC9BcHAuanMiLCJhcHAvY29tcG9uZW50cy9Gb290ZXIucmVhY3QuanMiLCJhcHAvY29tcG9uZW50cy9IZWFkZXIucmVhY3QuanMiLCJhcHAvY29tcG9uZW50cy9NYWluU2VjdGlvbi5yZWFjdC5qcyIsImFwcC9zdG9yZXMvR0hTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi8uLi9hcHAvQXBwLmpzJyk7XG52YXIgVGVzdFV0aWxzID0gcmVxdWlyZSgncmVhY3QtYWRkb25zJykuVGVzdFV0aWxzO1xuXG5kZXNjcmliZShcIkFwcFwiLCBmdW5jdGlvbigpIHtcblxuICBpdChcInNob3VsZCByZW5kZXIgdGV4dDogSGVsbG8gd29ybGQhXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KEFwcCgpKTtcbiAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50ZXh0Q29udGVudCkudG9FcXVhbCgnSGVsbG8gd29ybGQhJyk7XG4gIH0pO1xuXG59KTsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIEZvb3RlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Gb290ZXIucmVhY3QnKTtcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSGVhZGVyLnJlYWN0Jyk7XG52YXIgTWFpblNlY3Rpb24gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTWFpblNlY3Rpb24ucmVhY3QnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgR0hTdG9yZSA9IHJlcXVpcmUoJy4vc3RvcmVzL0dIU3RvcmUnKTtcblxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBjdXJyZW50IEdpdGh1YiBkYXRhIGZyb20gdGhlIEdpdGh1YiBTdG9yZSAtLSBub3QgaW1wbGVtZW50ZWQgeWV0XG4gKi9cbmZ1bmN0aW9uIGdldEdpdGh1Yk91dHB1dFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlY2VudERhdGE6IEdIU3RvcmUuZ2V0UmVjZW50RGF0YSgpLFxuICB9O1xufVxuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuXG4vKlxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRHaXRodWJPdXRwdXRTdGF0ZSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBHSFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgR0hTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiovXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gIFx0cmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpblNlY3Rpb24sIG51bGwpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpXG4gICAgICApXG4gIFx0KTtcbiAgfSxcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgJ2NoYW5nZScgZXZlbnRzIGNvbWluZyBmcm9tIHRoZSBHSFN0b3JlIC0tIG5vdCBpbXBsZW1lbnRlZCB5ZXRcbiAgICovXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXsgY29uc29sZS53YXJuKCdub3QgaW1wbGVtZW50ZWQgeWV0Jyl9XG5cbn0pO1xuXG5cdFxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRm9vdGVyXCIsXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgXHRyZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCB7aWQ6IFwiZm9vdGVyXCJ9LCBcbiAgICAgICAgXCJDb3VydGVzeSBvZiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiaHR0cHM6Ly9ub2Rlc291cmNlLmNvbVwifSwgXCJOb2RlU291cmNlXCIpLCBcIi5cIlxuICAgICAgKVxuICAgICk7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSGVhZGVyXCIsXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwge2lkOiBcImhlYWRlclwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIlRvcCBHaXRodWIgUmVwb3MgQnkgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIilcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIE1haW5TZWN0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk1haW5TZWN0aW9uXCIsXG5cblxuICAvKipcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwge2lkOiBcIm1haW5cIn1cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5TZWN0aW9uOyIsIi8vIHZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4vLyB2YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyB2YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbi8vIHZhciBfdG9kb3MgPSB7fTtcblxuLy8gLyoqXG4vLyAgKiBDcmVhdGUgYSBUT0RPIGl0ZW0uXG4vLyAgKiBAcGFyYW0gIHtzdHJpbmd9IHRleHQgVGhlIGNvbnRlbnQgb2YgdGhlIFRPRE9cbi8vICAqL1xuLy8gZnVuY3Rpb24gY3JlYXRlKHRleHQpIHtcbi8vICAgICAvLyBIYW5kIHdhdmluZyBoZXJlIC0tIG5vdCBzaG93aW5nIGhvdyB0aGlzIGludGVyYWN0cyB3aXRoIFhIUiBvciBwZXJzaXN0ZW50XG4vLyAgICAgLy8gc2VydmVyLXNpZGUgc3RvcmFnZS5cbi8vICAgICAvLyBVc2luZyB0aGUgY3VycmVudCB0aW1lc3RhbXAgKyByYW5kb20gbnVtYmVyIGluIHBsYWNlIG9mIGEgcmVhbCBpZC5cbi8vICAgICB2YXIgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNik7XG4vLyAgICAgX3RvZG9zW2lkXSA9IHtcbi8vICAgICAgICAgaWQ6IGlkLFxuLy8gICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4vLyAgICAgICAgIHRleHQ6IHRleHRcbi8vICAgICB9O1xuLy8gfVxuXG4vLyAvKipcbi8vICAqIFVwZGF0ZSBhIFRPRE8gaXRlbS5cbi8vICAqIEBwYXJhbSAge3N0cmluZ30gaWRcbi8vICAqIEBwYXJhbSB7b2JqZWN0fSB1cGRhdGVzIEFuIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgb25seSB0aGUgZGF0YSB0byBiZVxuLy8gICogICAgIHVwZGF0ZWQuXG4vLyAgKi9cbi8vIGZ1bmN0aW9uIHVwZGF0ZShpZCwgdXBkYXRlcykge1xuLy8gICAgIF90b2Rvc1tpZF0gPSBhc3NpZ24oe30sIF90b2Rvc1tpZF0sIHVwZGF0ZXMpO1xuLy8gfVxuXG5cbi8vIHZhciBHSFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbi8vICAgICAvKipcbi8vICAgICAgKiBUZXN0cyB3aGV0aGVyIGFsbCB0aGUgcmVtYWluaW5nIFRPRE8gaXRlbXMgYXJlIG1hcmtlZCBhcyBjb21wbGV0ZWQuXG4vLyAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbi8vICAgICAgKi9cbi8vICAgICBhcmVBbGxDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGZvciAodmFyIGlkIGluIF90b2Rvcykge1xuLy8gICAgICAgICAgICAgaWYgKCFfdG9kb3NbaWRdLmNvbXBsZXRlKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH0sXG5cbi8vICAgICAvKipcbi8vICAgICAgKiBHZXQgdGhlIGVudGlyZSBjb2xsZWN0aW9uIG9mIFRPRE9zLlxuLy8gICAgICAqIEByZXR1cm4ge29iamVjdH1cbi8vICAgICAgKi9cbi8vICAgICBnZXRBbGw6IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICByZXR1cm4gX3RvZG9zO1xuLy8gICAgIH0sXG5cbi8vICAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4vLyAgICAgfSxcblxuLy8gICAgIC8qKlxuLy8gICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4vLyAgICAgICovXG4vLyAgICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vLyAgICAgICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4vLyAgICAgfSxcblxuLy8gICAgIC8qKlxuLy8gICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4vLyAgICAgICovXG4vLyAgICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vLyAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4vLyAgICAgfVxuLy8gfSk7XG5cbi8vIC8vIFJlZ2lzdGVyIGNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgdXBkYXRlc1xuLy8gQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihhY3Rpb24pIHtcbi8vICAgICB2YXIgdGV4dDtcblxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLmFjdGlvblR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBUb2RvQ29uc3RhbnRzLlRPRE9fQ1JFQVRFOlxuLy8gICAgICAgICAgICAgdGV4dCA9IGFjdGlvbi50ZXh0LnRyaW0oKTtcbi8vICAgICAgICAgICAgIGlmICh0ZXh0ICE9PSAnJykge1xuLy8gICAgICAgICAgICAgICAgIGNyZWF0ZSh0ZXh0KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIFRvZG9TdG9yZS5lbWl0Q2hhbmdlKCk7XG4vLyAgICAgICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFRvZG9Db25zdGFudHMuVE9ET19UT0dHTEVfQ09NUExFVEVfQUxMOlxuLy8gICAgICAgICAgICAgaWYgKFRvZG9TdG9yZS5hcmVBbGxDb21wbGV0ZSgpKSB7XG4vLyAgICAgICAgICAgICAgICAgdXBkYXRlQWxsKHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlXG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHVwZGF0ZUFsbCh7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiB0cnVlXG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBUb2RvU3RvcmUuZW1pdENoYW5nZSgpO1xuLy8gICAgICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBUb2RvQ29uc3RhbnRzLlRPRE9fVU5ET19DT01QTEVURTpcbi8vICAgICAgICAgICAgIHVwZGF0ZShhY3Rpb24uaWQsIHtcbi8vICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2Vcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgVG9kb1N0b3JlLmVtaXRDaGFuZ2UoKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgVG9kb0NvbnN0YW50cy5UT0RPX0NPTVBMRVRFOlxuLy8gICAgICAgICAgICAgdXBkYXRlKGFjdGlvbi5pZCwge1xuLy8gICAgICAgICAgICAgICAgIGNvbXBsZXRlOiB0cnVlXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIFRvZG9TdG9yZS5lbWl0Q2hhbmdlKCk7XG4vLyAgICAgICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFRvZG9Db25zdGFudHMuVE9ET19VUERBVEVfVEVYVDpcbi8vICAgICAgICAgICAgIHRleHQgPSBhY3Rpb24udGV4dC50cmltKCk7XG4vLyAgICAgICAgICAgICBpZiAodGV4dCAhPT0gJycpIHtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGUoYWN0aW9uLmlkLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIFRvZG9TdG9yZS5lbWl0Q2hhbmdlKCk7XG4vLyAgICAgICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFRvZG9Db25zdGFudHMuVE9ET19ERVNUUk9ZOlxuLy8gICAgICAgICAgICAgZGVzdHJveShhY3Rpb24uaWQpO1xuLy8gICAgICAgICAgICAgVG9kb1N0b3JlLmVtaXRDaGFuZ2UoKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgVG9kb0NvbnN0YW50cy5UT0RPX0RFU1RST1lfQ09NUExFVEVEOlxuLy8gICAgICAgICAgICAgZGVzdHJveUNvbXBsZXRlZCgpO1xuLy8gICAgICAgICAgICAgVG9kb1N0b3JlLmVtaXRDaGFuZ2UoKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICAvLyBubyBvcFxuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEdIU3RvcmU7Il19
