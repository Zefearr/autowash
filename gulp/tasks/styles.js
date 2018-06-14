var gulp = require('gulp'),  // import gulp as variable for inv (gulp package)
    postcss = require('gulp-postcss'), // preproc for css(allow nested and autoprefixers)
    autoprefixer = require('autoprefixer'), // postcss module
    cssvars = require('postcss-simple-vars'), //variables for colors
    nested = require('postcss-nested'), // for nesting css
    cssImport = require('postcss-import'); // for importing modules


gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, cssImport, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
           
        })
        .pipe(gulp.dest('./app/temp/styles'));
})