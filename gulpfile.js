var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var s3 = require("gulp-s3");
var fs = require('file-system');

/**
 * Compass Task
 */

gulp.task('compass', function() {
  return gulp.src('src/sass/application.scss')
  .pipe(compass({
    css: 'html',
    sass: 'src/sass/',
    require: 'breakpoint',
    force: false
  }))
  .pipe(gulp.dest('html'))
});


/**
 * Javascript General Task
 */

gulp.task('scripts', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'src/js/application.js'
  ])
  .pipe(concat('application.js'))
  .pipe(gulp.dest('html'))
});

/**
 * Webserver Task
 */

gulp.task('webserver', function() {
  gulp.src('html')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

/**
 * S3 Task
 */

gulp.task('s3', function() {
  aws = JSON.parse(fs.readFileSync('./aws.json'));
  gulp.src('./html/**')
    .pipe(s3(aws));
});

/**
 * Watch Task
 */

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['compass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
});

/**
 * Default task
 */

gulp.task('default', gulp.parallel('watch', 'webserver'));

/**
 * Build task
 */

gulp.task('build', gulp.parallel('compass', 'scripts'));

/**
 * Deploy task
 */

gulp.task('deploy', gulp.parallel('build', 's3'));