var gulp = require('gulp');
var sass = require('gulp-sass');
var minScss = require('gulp-clean-css');
var server = require('gulp-webserver');

gulp.task('devScss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(minScss())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 9090,
            proxies: [{
                source: '/users/api/get/train_tickets',
                target: 'http://localhost:3000/users/api/get/train_tickets'
            }]
        }))
})

gulp.task('watch', function() {
    return gulp.watch('./src/sass/*.scss', gulp.series('devScss'))
})

gulp.task('default', gulp.series('server', 'watch'))