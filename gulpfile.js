var friendlyFormatter = require("eslint-friendly-formatter");
var plumber = require("gulp-plumber");
var through = require("through2");
var eslint = require("gulp-eslint");
var chalk = require("chalk");
var notify = require("gulp-notify");
var newer = require("gulp-newer");
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var gutil = require("gulp-util");
var gulp = require("gulp");

var src = "./src/**/*.js";
var dest = "lib";
var eslintrc = './.eslintrc';

gulp.task("default", ["build"]);

gulp.task("build", function() {
  return gulp.src(src)
    .pipe(plumber({errorHandler: notify.onError("Babel Error: <%= error.message %>")}))
    .pipe(newer(dest))
    .pipe(through.obj(function(file, enc, cb) {
      gutil.log('Compiling', "'" + chalk.cyan(file.path) + "'...");
      cb(null, file);
    }))
    .pipe(babel())
    .pipe(gulp.dest(dest));
});

gulp.task("lint", function() {
  return gulp.src(src)
    .pipe(plumber({errorHandler: notify.onError("ESlint Error: <%= error.message %>")}))
    .pipe(eslint(eslintrc))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failAfterError());
});

gulp.task("watch", ["build"], function() {
  gulp.watch(src, ["lint", "build"]);
});
