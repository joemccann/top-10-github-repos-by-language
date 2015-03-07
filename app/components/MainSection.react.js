var React = require('react')
var ReactPropTypes = React.PropTypes
var LanguageListItem = require('./LanguageListItem.react')

var MainSection = React.createClass({

	getInitialState: function(){
	  return { data: [{ count: 0, language: 'All'}] }
	},

	componentDidMount: function(){
	  $.get(this.props.url, function(result){
	    if (this.isMounted()){
	      this.setState({data: result})
	    }
	  }.bind(this))
	},

  render: function(){

    var content = this.state.data.map(function(item){
      return (
				<LanguageListItem languageListItem={item} />
      )
    })

    return (
      <section id="main">
      	<ul>{content}</ul>
      </section>
    )
  }

})

module.exports = MainSection