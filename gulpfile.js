var gulp = require('gulp')

var tslint = require('gulp-tslint')

tslint.task('lint', function () {
    return gulp.src([
        './src/**.ts'
    ]).pipe(tslint())
        .pipe(tslint.report('verbose'))
});

gulp.task('default', ['lint'])
