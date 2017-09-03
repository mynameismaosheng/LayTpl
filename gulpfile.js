var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', ['webserver']);

gulp.task('webserver',function(){
    connect.server({
        livereload:true,
        port:2666
    });
})