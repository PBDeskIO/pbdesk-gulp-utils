(function () {
    'use strict';

    module.exports = function(gulp, src, dest){

        var gUtils = require('./utils')(gulp);
        var vinylPaths = require('vinyl-paths');
        var del = require('del');

        gulp.task('clean', function(){

            return gUtils.clean(src);
            /*gUtils.logV('Deleting: ' + src);
            del(dest, function(err, deletedFiles){
                if(err){
                    gUtils.log('Error cleaning : in _clean call');
                    gUtilslog(err);
                }
                else {
                    gUtils.logV(deletedFiles.length +  ' Files deleted:');
                    gUtils.logV(deletedFiles.join(', '));
                }
            });*/
        });

        gulp.task('copy', function(){

            return gUtils.copyFiles(src, dest);
            /*gUtils.logV('Copying: ' + src);
            gUtils.logV('To: ' + dest);
            return gulp
                .src(src)
                .pipe(gulp.dest(dest));*/
        });

        gulp.task('clean2', function(done){
            return gulp
                .src(src)
                .pipe(vinylPaths(del));
        })


    };

}());
