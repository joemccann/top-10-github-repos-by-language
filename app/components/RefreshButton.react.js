var React = require('react')

var RefreshButton = React.createClass({
  getInitialState: function(){
    return {};
  },
  handleClick: function(event){

  	// TODO: ADD ROUTE
	  $.get('/fetchLatestGitHubOutput', function(result){
	  	console.dir(result)
	    if (this.isMounted()){
	      this.setState({data: result})
	    }
	  }.bind(this))

  },
  render: function() {
    return (
      <button onClick={this.handleClick}>
        Click to update data.
      </button>
    );
  }
});

module.exports = RefreshButton;