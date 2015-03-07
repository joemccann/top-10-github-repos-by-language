var React = require('react');

var Footer = React.createClass({

  /**
   * @return {object}
   */
  render: function() {

  	return (
      <footer id="footer">
        Courtesy of <a href="https://nodesource.com">NodeSource</a>.
      </footer>
    );
  }

});

module.exports = Footer;