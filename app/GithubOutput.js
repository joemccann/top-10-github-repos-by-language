/** @jsx React.DOM */
var React = require('react');

/** http://facebook.github.io/react/docs/component-specs.html **/

var GithubOutPut = React.createClass({
  getInitialState: function() {
    return {gho: 0};
  },
  handleChange: function(event){
    this.setState({bac: event.target.value})
  },
  render: function() {
  	var ghoStatsValue = 'awesome stuff'
    return (
      <div>
        <p>Here's is the latest GitHub stats:</p>
        <h4>Compute your Ballmer Peak:</h4>
        <p>
          If your BAC is{' '}
          <input type="text" onChange={this.handleChange} value={this.state.gho} />
          {', '}then <b>{ghoStatsValue}</b> of your lines of code will be bug free.
        </p>
      </div>
    );
  }
});

	
module.exports = GithubOutPut;
