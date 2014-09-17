var request = require('request')
	,	cheerio = require('cheerio')
	;

const GITHUB_URL = 'https://github.com/search?q=stars%3a%3E1&s=stars&type=Repositories'
const DOM_SELECTOR_TOP_10_LANGS = '.filter-list .filter-item'
const DOM_SELECTOR_TOP_10_REPOS = '.repo-list .repo-list-item'


// Fetch the webpage...
function githubUrlHandler(err,resp,data){
	if(err) return console.error(err)
	crawlDOMLangs(data, echoResults)
	crawlDOMRepos(data, echoResults)
}

// Crawl dom and get relevant bits
function crawlDOMLangs(dom, cb){

	if(!cb || typeof cb !== 'function') return console.error('You need a real callback for crawlDOM.')

	var $ = cheerio.load(dom)
		,	anchors =  $(DOM_SELECTOR_TOP_10_LANGS)
		, results = []
		;

  $(anchors).each(function(i, link){
    results.push( $(link).text().replace(/\n/g, '').replace(/^\s+/g, "").replace(/\s+/g, ":") )
  })

  cb(results)

}

// Crawl dom and get relevant bits
function crawlDOMRepos(dom, cb){

	if(!cb || typeof cb !== 'function') return console.error('You need a real callback for crawlDOM.')

	var $ = cheerio.load(dom)
		,	items =  $(DOM_SELECTOR_TOP_10_REPOS)
		, results = []
		;

  $(items).each(function(i, item){
  	var stars = $(item).find('[aria-label="Stargazers"]').text().replace(/\n/g, '').replace(/^\s+|\s+$/g, "").replace(',', '')
  	var name = $(item).find('.repo-list-name a').text()
    results.push( "Repo "+name+" has "+stars+" stars." )
  })

  cb(results)

}

// Output the results to console
function echoResults(data){

	console.dir(data)

	console.log('\n')

	if(!/stars/.test(data[0])){
		for(i=0, j=data.length; i<j; i++){
			var item = data[i].split(":")
			console.log( i+1+') '+ item[1] + " has " + item[0] + " repositories.")
		}		
	}
	else{
		for(i=0, j=data.length; i<j; i++){
			console.log( i+1+') '+ data[i])
		}		
	}

	console.log('\n')

}

// Go!
request(GITHUB_URL, githubUrlHandler)

