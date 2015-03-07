(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, {url: "github_output.json"}), document.body);
},{"./App.js":"/Users/joemccann/Documents/workspace/github-by-lang/app/App.js","react":"react"}],"/Users/joemccann/Documents/workspace/github-by-lang/app/App.js":[function(require,module,exports){
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
},{"react":"react"}]},{},["./app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9BcHAuanMiLCJhcHAvY29tcG9uZW50cy9Gb290ZXIucmVhY3QuanMiLCJhcHAvY29tcG9uZW50cy9IZWFkZXIucmVhY3QuanMiLCJhcHAvY29tcG9uZW50cy9NYWluU2VjdGlvbi5yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpO1xuUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7dXJsOiBcImdpdGh1Yl9vdXRwdXQuanNvblwifSksIGRvY3VtZW50LmJvZHkpOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0Zvb3Rlci5yZWFjdCcpO1xudmFyIEhlYWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9IZWFkZXIucmVhY3QnKTtcbnZhciBNYWluU2VjdGlvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbi5yZWFjdCcpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBjdXJyZW50IEdpdGh1YiBkYXRhIGZyb20gdGhlIEdpdGh1YiBTdG9yZSAtLSBub3QgaW1wbGVtZW50ZWQgeWV0XG4gKi9cbmZ1bmN0aW9uIGdldEdpdGh1Yk91dHB1dFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlY2VudERhdGE6IG51bGwsXG4gIH07XG59XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQXBwXCIsXG5cblx0bG9hZE5vdGlmaWNhdGlvbnNGcm9tU2VydmVyOiBmdW5jdGlvbigpIHtcblx0ICAkLmFqYXgoe1xuXHQgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcblx0ICAgIGRhdGFUeXBlOiAnanNvbicsXG5cdCAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcblx0ICAgICAgY29uc29sZS5kaXIodGhpcy5zdGF0ZSk7XG5cdCAgICB9LmJpbmQodGhpcylcblx0ICB9KTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0ICByZXR1cm4ge2RhdGE6IHt9fTtcblx0fSxcblx0Y29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcblx0ICB0aGlzLmxvYWROb3RpZmljYXRpb25zRnJvbVNlcnZlcigpO1xuXHR9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICBcdHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1haW5TZWN0aW9uLCBudWxsKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKVxuICAgICAgKVxuICBcdCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yICdjaGFuZ2UnIGV2ZW50cyBjb21pbmcgZnJvbSB0aGUgR0hTdG9yZSAtLSBub3QgaW1wbGVtZW50ZWQgeWV0XG4gICAqL1xuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7IGNvbnNvbGUud2Fybignbm90IGltcGxlbWVudGVkIHlldCcpfVxuXG59KTtcblxuXHRcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGb290ZXJcIixcblxuICAvKipcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICBcdHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIHtpZDogXCJmb290ZXJcIn0sIFxuICAgICAgICBcIkNvdXJ0ZXN5IG9mIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwczovL25vZGVzb3VyY2UuY29tXCJ9LCBcIk5vZGVTb3VyY2VcIiksIFwiLlwiXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJIZWFkZXJcIixcblxuICAvKipcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7aWQ6IFwiaGVhZGVyXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiVG9wIEdpdGh1YiBSZXBvcyBCeSBQcm9ncmFtbWluZyBMYW5ndWFnZVwiKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTWFpblNlY3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTWFpblNlY3Rpb25cIixcblxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCB7aWQ6IFwibWFpblwifVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpblNlY3Rpb247Il19
