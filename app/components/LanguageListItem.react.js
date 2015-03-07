var React = require('react')
var ReactPropTypes = React.PropTypes


var LanguageListItem = React.createClass({

  render: function() {

    var lli = this.props.languageListItem

    return (
      <li className='languageListItem'>
				{lli.language} : {lli.count}
 			</li>
    )
  }

})

module.exports = LanguageListItem