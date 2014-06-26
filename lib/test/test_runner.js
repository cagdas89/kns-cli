var gulp = require("gulp");
var mocha = require('gulp-mocha');

/**
 * @Test
 *
 */
gulp.task('test', function () {
    return gulp.src('./test/**/*.js')
        .pipe(mocha({reporter: 'spec'}));
});

module.exports.run = function() {
    gulp.start('test');
};