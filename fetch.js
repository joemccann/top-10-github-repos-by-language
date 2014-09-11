var request = require('request')
	,	cheerio = require('cheerio')
	;

const GITHUB_URL = 'https://github.com/search?q=stars%3a%3E1&s=stars&type=Repositories'
const DOM_SELECTOR = '.filter-list .filter-item'

// Fetch the webpage...
function githubUrlHandler(err,resp,data){
	if(err) return console.error(err)
	return crawlDOM(data, echoResults)
}

// Crawl dom and get relevant bits
function crawlDOM(dom, cb){

	if(!cb || typeof cb !== 'function') return console.error('You need a real callback for crawlDOM.')

	var $ = cheerio.load(dom)
		,	anchors =  $(DOM_SELECTOR)
		, results = []
		;

  $(anchors).each(function(i, link){
    results.push( $(link).text().replace(/\n/g, '').replace(/^\s+/g, "").replace(/\s+/g, ":") )
  })

  cb(results)

}

// Output the results to console
function echoResults(data){

	console.log('\n')

	for(i=0, j=data.length; i<j; i++){
		var item = data[i].split(":")
		console.log( i+1+') '+ item[1] + " has " + item[0] + " repositories.")
	}

	console.log('\n')

}

// Go!
request(GITHUB_URL, githubUrlHandler)


