# Top 10 Starred Github Repositories

A wee bit of screen scraping to get the latest numbers on top 10 starred programming languages on GitHub.

## IMPORTANT

This project is a WIP and does not necessarily include best practices, recommended production techniques, etc.  It is simply a good project to learn React, Gulp and Browserify.

### Install

* Clone the repo and `cd` into the repo's directory
* Run `npm install`

### Development
* In on terminal, run `gulp` 
* In a separate terminal, run `npm start`
* Go to `localhost:9599` to display the app
* Go to `localhost:9599/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Production
* Run `NODE_ENV=production gulp deploy`

To minify the code.
TODO:  Update this for production...

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