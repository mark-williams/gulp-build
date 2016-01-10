var gulp = require('gulp');
var config = require('./gulp.config')();
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
 
gulp.task('default', function() {
   console.log('Gulp!!!'); 
});

gulp.task('inject-refs', function() {
    var options = config.getWiredepDefaultOptions();
    
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(config.js)))
        .pipe(inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client))
        ;    
});