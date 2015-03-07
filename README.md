# Top 10 Starred Github Repositories

A wee bit of screen scraping to get the latest numbers on top 10 starred programming languages on GitHub.

### Install

* Clone the repo
* Run `npm install`

### Development
* Run `gulp`
* Start a webservice in the `build` folder, f.ex. `npm i -g http-server && http-server`
* Go to `localhost:8080` to display the app
* Go to `localhost:8080/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `NODE_ENV=production gulp deploy`

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration


## License

MIT

## Credits

[React App Boilerplate](https://github.com/christianalfoni/react-app-boilerplate)