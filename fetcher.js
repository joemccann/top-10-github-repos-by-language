var request = require('request')
	,	cheerio = require('cheerio')
	;

const GITHUB_URL = 'https://github.com/search?q=stars%3a%3E1&s=stars&type=Repositories'
const DOM_SELECTOR_TOP_10_LANGS = '.filter-list .filter-item'
const DOM_SELECTOR_TOP_10_REPOS = '.repo-list .repo-list-item'

function fetcher(cb){
	request(GITHUB_URL, function(err,resp,data){

		if(err) return cb(err)

		cb && cb( _crawlDOMLangs(data) ) // yolo

	})
}

// Crawl the DOM to extract the languages...

function _crawlDOMLangs(dom){

	var $ = cheerio.load(dom)
		,	anchors =  $(DOM_SELECTOR_TOP_10_LANGS)
		, results = []
		;

  $(anchors).each(function(i, link){
  	var o = {
  		count: 0,
  		language: ''
  	}
  	var copy = _splitDOMCopy($(link).text())
  	o.count = copy[0]
  	o.language = copy[1]
    results.push( o )
  })

  return results

}

// Format the copy from the DOM to it is JSON friendly.

function _splitDOMCopy(copy){
	// embarrassing hack...fix this
	var c = copy.replace(/\n/g, '').replace(/^\s+/g, "").replace(/\s+/g, ":")
	return c.split(':')
}


exports = module.exports = fetcher;
