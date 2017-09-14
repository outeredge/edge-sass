var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    rename      = require('gulp-rename'),
    cmq         = require('gulp-group-css-media-queries'),
    cssmin      = require('gulp-cssmin');

gulp.task('css', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', function(error){
            console.log(error.formatted);
            this.emit('end');
        })
        .pipe(cmq())
        .pipe(gulp.dest('css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['css'], function(){
    gulp.watch('sass/**/*.scss', ['css']);
});

gulp.task('default', ['css']);
