var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function(){
	// get the src js file
	gulp.src('src/js/main.js')
		// compiles from JSX to JavaScript
		.pipe(browserify({transform: 'reactify'}))
		// Concatenate the result into a new file main.js
		.pipe(concat('main.js'))
		// save this file into the directory
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
	// get the source file
	gulp.src('src/index.html')
		// copy it into new directory
		.pipe(gulp.dest('dist'))
});

// Set the default gulp task
gulp.task('default', ['browserify', 'copy']);

// Define a watcher to automatically run the default
// task in the specific directory when any file changes
gulp.task('watch', function(){
	gulp.watch('src/**/*.*', ['default']);
})