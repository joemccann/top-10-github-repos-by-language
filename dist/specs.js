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


/**
 * Retrieve the current Github data from the Github Store -- not implemented yet
 */
function getGithubOutputState() {
  return {
    recentData: null,
  };
}

var App = React.createClass({displayName: "App",

	loadNotificationsFromServer: function() {
	  $.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    success: function(data) {
	      this.setState({data: data});
	      console.dir(this.state);
	    }.bind(this)
	  });
	},
	getInitialState: function() {
	  return {data: {}};
	},
	componentWillMount: function() {
	  this.loadNotificationsFromServer();
	},

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

},{"./components/Footer.react":"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Footer.react.js","./components/Header.react":"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Header.react.js","./components/MainSection.react":"/Users/joemccann/Documents/workspace/github-by-lang/app/components/MainSection.react.js","react":"react"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/components/Footer.react.js":[function(require,module,exports){
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
},{"react":"react"}]},{},["./specs/App-spec.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyIsImFwcC9BcHAuanMiLCJhcHAvY29tcG9uZW50cy9Gb290ZXIucmVhY3QuanMiLCJhcHAvY29tcG9uZW50cy9IZWFkZXIucmVhY3QuanMiLCJhcHAvY29tcG9uZW50cy9NYWluU2VjdGlvbi5yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEFwcCA9IHJlcXVpcmUoJy4vLi4vYXBwL0FwcC5qcycpO1xudmFyIFRlc3RVdGlscyA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucycpLlRlc3RVdGlscztcblxuZGVzY3JpYmUoXCJBcHBcIiwgZnVuY3Rpb24oKSB7XG5cbiAgaXQoXCJzaG91bGQgcmVuZGVyIHRleHQ6IEhlbGxvIHdvcmxkIVwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChBcHAoKSk7XG4gICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGV4dENvbnRlbnQpLnRvRXF1YWwoJ0hlbGxvIHdvcmxkIScpO1xuICB9KTtcblxufSk7IiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBGb290ZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRm9vdGVyLnJlYWN0Jyk7XG52YXIgSGVhZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0hlYWRlci5yZWFjdCcpO1xudmFyIE1haW5TZWN0aW9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01haW5TZWN0aW9uLnJlYWN0Jyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIGN1cnJlbnQgR2l0aHViIGRhdGEgZnJvbSB0aGUgR2l0aHViIFN0b3JlIC0tIG5vdCBpbXBsZW1lbnRlZCB5ZXRcbiAqL1xuZnVuY3Rpb24gZ2V0R2l0aHViT3V0cHV0U3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVjZW50RGF0YTogbnVsbCxcbiAgfTtcbn1cblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcblxuXHRsb2FkTm90aWZpY2F0aW9uc0Zyb21TZXJ2ZXI6IGZ1bmN0aW9uKCkge1xuXHQgICQuYWpheCh7XG5cdCAgICB1cmw6IHRoaXMucHJvcHMudXJsLFxuXHQgICAgZGF0YVR5cGU6ICdqc29uJyxcblx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuXHQgICAgICBjb25zb2xlLmRpcih0aGlzLnN0YXRlKTtcblx0ICAgIH0uYmluZCh0aGlzKVxuXHQgIH0pO1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHQgIHJldHVybiB7ZGF0YToge319O1xuXHR9LFxuXHRjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuXHQgIHRoaXMubG9hZE5vdGlmaWNhdGlvbnNGcm9tU2VydmVyKCk7XG5cdH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gIFx0cmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpblNlY3Rpb24sIG51bGwpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpXG4gICAgICApXG4gIFx0KTtcbiAgfSxcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgJ2NoYW5nZScgZXZlbnRzIGNvbWluZyBmcm9tIHRoZSBHSFN0b3JlIC0tIG5vdCBpbXBsZW1lbnRlZCB5ZXRcbiAgICovXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXsgY29uc29sZS53YXJuKCdub3QgaW1wbGVtZW50ZWQgeWV0Jyl9XG5cbn0pO1xuXG5cdFxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkZvb3RlclwiLFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gIFx0cmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwge2lkOiBcImZvb3RlclwifSwgXG4gICAgICAgIFwiQ291cnRlc3kgb2YgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImh0dHBzOi8vbm9kZXNvdXJjZS5jb21cIn0sIFwiTm9kZVNvdXJjZVwiKSwgXCIuXCJcbiAgICAgIClcbiAgICApO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkhlYWRlclwiLFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIHtpZDogXCJoZWFkZXJcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJUb3AgR2l0aHViIFJlcG9zIEJ5IFByb2dyYW1taW5nIExhbmd1YWdlXCIpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBNYWluU2VjdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJNYWluU2VjdGlvblwiLFxuXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIHtpZDogXCJtYWluXCJ9XG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluU2VjdGlvbjsiXX0=
