var gulp = require('gulp'); 
// jshint will find every syntactical error
var jshint = require('gulp-jshint'); 
var watch = require('gulp-watch'); 
// run lint once then run watch from then on
gulp.task('default', ['lint', 'watch']); 

// gulp watch allows this to be run constantly and run lint when code changes
gulp.task('watch', function() { 
	gulp.watch('./src/**/*.js', ['lint']); 
}); 
// catches errors
gulp.task('lint', function() { 
	return gulp.src('./src/**/*.js') 
	.pipe(jshint()) 
	.pipe(jshint.reporter('jshint-stylish')); 
});