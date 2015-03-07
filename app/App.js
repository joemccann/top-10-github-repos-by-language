var Footer = require('./components/Footer.react')
var Header = require('./components/Header.react')
var MainSection = require('./components/MainSection.react')
var React = require('react')

var App = React.createClass({

	render: function(){

		return(
		  <div>
		    <Header />
		    <MainSection url="github_output.json" />
		    <Footer />
		  </div>
		)
	}

})

	
module.exports = App
