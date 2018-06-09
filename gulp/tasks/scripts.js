var gulp = require('gulp'),
    webpack = require('webpack')


gulp.task('scripts', function(callback){
    webpack(require('../../webpack.config.js'), function(err, stats){
        if(err) {
            console.log(err.tostring());

        }
        console.log(stats.toString());
        callback();
    });
});