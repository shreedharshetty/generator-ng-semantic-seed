var gulp = require('gulp');

gulp.task('lint-js', function(){
    var eslint = require('gulp-eslint');
    return gulp.src(['assets/scripts/**/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('minify', function(){
    var usemin = require('gulp-usemin'),
        uglify = require('gulp-uglify'),
        minifyHtml = require('gulp-minify-html'),
        minifyCss = require('gulp-minify-css'),
        rev = require('gulp-rev');
    return gulp.src('index.html')
        .pipe(usemin({
            css: [ rev() ],
            html: [ minifyHtml({ empty: true }) ],
            js: [ uglify(), rev() ],
            js1: [ uglify(), rev() ],
            inlinejs: [ uglify() ],
            inlinecss: [ minifyCss(), 'concat' ]
        }))
        .pipe(gulp.dest('dist/'));
});