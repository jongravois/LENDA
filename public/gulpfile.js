var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');

var $$ = require('gulp-load-plugins')({lazy: true});

gulp.task('clean-styles', function(done){
    clean(config.temp + '**/*.css', done);
});

gulp.task('styles', ['clean-styles'], function(){
    log('Compiling SASS -> CSS');
    return gulp
        .src(config.sass)
        .pipe($$.plumber())
        .pipe($$.sass({onError: function(e) { console.log(e); } }))
        .pipe($$.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('vet', function(){
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($$.if(args.verbose, $$.print()))
        .pipe($$.jscs())
        .pipe($$.jshint({'-W117': true, '-W064': true}))
        .pipe($$.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($$.jshint.reporter('fail'));
});

gulp.task('watch-sass', function(){
    gulp.watch([config.sass],['styles']);
});

gulp.task('wiredep', function(){
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($$.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.index));
});

//////////
function clean(path, done){
    log('Cleaning: ' + $$.util.colors.blue(path));
    del(path, done);
}
function log(msg) {
    if(typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $$.util.log($$.util.colors.blue(msg[item]));
            }
        }
    } else {
        $$.util.log($$.util.colors.blue(msg));
    }
}
