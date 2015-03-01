var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('vet', function(){
    return gulp
        .src([
            './angular/**/*.js',
            './*.js'
        ])
        .pipe(jscs())
        .pipe(jshint({'-W117': true, '-W064': true}))
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});
