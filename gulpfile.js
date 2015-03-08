const gulp = require('gulp')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const watchify = require('watchify')
const reactify = require('reactify') 
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const streamify = require('gulp-streamify')
const notify = require('gulp-notify')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin';
const gutil = require('gulp-util')
const shell = require('gulp-shell')
const glob = require('glob')
const livereload = require('gulp-livereload')
const jasminePhantomJs = require('gulp-jasmine2-phantomjs')
const fetcher = require('./fetcher')
const fs = require('fs')

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
  'react-addons'
];

var browserifyTask = function (options) {

  // Our app bundler
	var appBundler = browserify({
		entries: [options.src], // Only need initial file, browserify finds the rest
   	transform: [reactify], // We want to convert JSX to normal javascript
		debug: options.development, // Gives us sourcemapping
		cache: {}, 
    packageCache: {}, 
    fullPaths: options.development // Requirement of watchify
	})

	// We set our dependencies as externals on our app bundler when developing		
	(options.development ? dependencies : []).forEach(function(dep) {
		appBundler.external(dep);
	})

  // The rebundle process
  var rebundle = function(){

    var start = Date.now()

    console.log('Building APP bundle')

    appBundler.bundle()
      .on('error', gutil.log)
      .pipe(source('main.js'))
      .pipe(gulpif(!options.development, streamify(uglify())))
      .pipe(gulp.dest(options.dest))
      .pipe(gulpif(options.development, livereload()))
      .pipe(notify(function(){
        console.log('APP bundle built in ' + (Date.now() - start) + 'ms');
      }))
  } // end rebundle definition

  // Fire up Watchify when developing
  if (options.development) {
    appBundler = watchify(appBundler);
    appBundler.on('update', rebundle);
  }
      
  // Run it at least once...
  rebundle()

  // We create a separate bundle for our dependencies as they
  // should not rebundle on file changes. This only happens when
  // we develop. When deploying, the dependencies will be included 
  // in the application bundle
  if (options.development) {

  	var testFiles = glob.sync('./specs/**/*-spec.js')

		var testBundler = browserify({
			entries: testFiles,
			debug: true, // Gives us sourcemapping
			transform: [reactify],
			cache: {}, 
      packageCache: {}, 
      fullPaths: true // Requirement of watchify
		})

		dependencies.forEach(function(dep){
			testBundler.external(dep)
		})

  	var rebundleTests = function () {
  		
      var start = Date.now()

  		console.log('Building TEST bundle')
  		
      testBundler.bundle()
      .on('error', gutil.log)
	      .pipe(source('specs.js'))
	      .pipe(gulp.dest(options.dest))
	      .pipe(livereload())
	      .pipe(notify(function () {
	        console.log('TEST bundle built in ' + (Date.now() - start) + 'ms');
	      }))
  	}

    testBundler = watchify(testBundler)
    testBundler.on('update', rebundleTests)
    rebundleTests()

    // Remove react-addons when deploying, as it is only for
    // testing
    if (!options.development) {
      dependencies.splice(dependencies.indexOf('react-addons'), 1);
    }

    var vendorsBundler = browserify({
      debug: true,
      require: dependencies
    });
    
    // Run the vendor bundle
    var start = new Date();
    console.log('Building VENDORS bundle')
    vendorsBundler.bundle()
      .on('error', gutil.log)
      .pipe(source('vendors.js'))
      .pipe(gulpif(!options.development, streamify(uglify())))
      .pipe(gulp.dest(options.dest))
      .pipe(notify(function () {
        console.log('VENDORS bundle built in ' + (Date.now() - start) + 'ms')
      }))
    
  }
  
}

var cssTask = function (options = {}) {
    if (options.development) {
      var run = function () {
        var start = new Date();
        console.log('Building CSS bundle');
        gulp.src(options.src)
          .pipe(concat('main.css'))
          .pipe(gulp.dest(options.dest))
          .pipe(notify(function () {
            console.log('CSS bundle built in ' + (Date.now() - start) + 'ms');
          }))
      };
      run();
      gulp.watch(options.src, run);
    } else {
      gulp.src(options.src)
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(options.dest));   
    }
}

var fetchTask = function(options = {}){

    console.log('Running Fetcher...')

    // Using request under the hood...
    fetcher(function fetcherCallback(err,data){
      if(err) return console.error(err)
      writeFile(JSON.stringify(data), options.path)
      // console.dir(data)
    })

  }


// Helper to write github output file...
function writeFile(data, path){
  var wstream = fs.createWriteStream(path)
  wstream.write(data)
  wstream.end()
}

// Starts our development workflow
gulp.task('default', function () {
  
  fetchTask({
    path: './build/github_output.json'
  })

  browserifyTask({
    development: true,
    src: './app/main.js',
    dest: './build'
  });
  
  cssTask({
    development: true,
    src: ['./styles/variables.css','./styles/reset.css','./styles/main.css'],
    dest: './build'
  });

});

gulp.task('deploy', function () {

  browserifyTask({
    development: false,
    src: './app/main.js',
    dest: './dist'
  });
  
  cssTask({
    development: false,
    src: ['./styles/variables.css','./styles/reset.css','./styles/main.css'],
    dest: './dist'
  });

  fetchTask({
    path: './dist/github_output.json'
  })

})

gulp.task('test', function(){
    return gulp.src('./build/testrunner-phantomjs.html').pipe(jasminePhantomJs())
})
