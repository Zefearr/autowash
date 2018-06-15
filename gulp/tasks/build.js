var gulp = require('gulp'),
    imgMin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

    gulp.task('prevdocs', function(){
        browserSync.init({
            notify: false,
            server: {
                baseDir: 'docs' 
            }
        });
    });


gulp.task('deleteDist', function(){ 
    return del('./docs'); 
});
// task below for copying additional files and folders into the dist folder
gulp.task('copeOther', ['deleteDist'], function(){
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./docs'));
});
gulp.task('optimizeImg', ['deleteDist'], function(){ 
    return gulp.src(['./app/images/**/*'])
        .pipe(imgMin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./docs/images')); 
});

gulp.task('usemin', ['deleteDist', 'styles', 'scripts'], function(){ 
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function(){return rev()}, function(){return cssnano()}],
            js: [function(){return rev()}, function(){return uglify()}] 
        }))
        .pipe(gulp.dest('./docs')) 
});


gulp.task('build', ['deleteDist','optimizeImg', 'usemin']); 