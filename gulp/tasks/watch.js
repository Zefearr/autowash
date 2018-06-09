var gulp = require('gulp'),  // import gulp as variable for inv (gulp package)
    watch = require('gulp-watch'), // watch task for automation (gulp-watch package)
    browserSync = require('browser-sync').create(); // define browser sync

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app' 
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh'); 
    });

});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
          .pipe(browserSync.stream()); 
  });

gulp.task('scriptsRefresh',['scripts'], function(){
    browserSync.reload();
})