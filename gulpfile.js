var gulp = require('gulp');
var config = require('./gulp.config')();
var wiredep = require('wiredep').stream;

gulp.task('default', function() {
   console.log('Gulp!!!'); 
});

gulp.task('inject-refs', function() {
    var options = config.getWiredepDefaultOptions();
    //console.log(config);
    //console.log(options);
    
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        //.pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client))
        ;    
});