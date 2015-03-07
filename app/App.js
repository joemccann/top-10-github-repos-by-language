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

var App = React.createClass({

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
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the GHStore -- not implemented yet
   */
  _onChange: function(){ console.warn('not implemented yet')}

});

	
module.exports = App;
