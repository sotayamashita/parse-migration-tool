var plumber = require("gulp-plumber");
var through = require("through2");
var chalk   = require("chalk");
var newer   = require("gulp-newer");
var babel   = require("gulp-babel");
var watch   = require("gulp-watch");
var gutil   = require("gulp-util");
var gulp    = require("gulp");
var path    = require("path");

var src = "./src/**/*.js";
var dest = "lib";

gulp.task("default", ["build"]);

gulp.task("build", function() {
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: function(err) {
        gutil.log(err.stack);
      }
    }))
    .pipe(newer(dest))
    .pipe(through.obj(function(file, enc, cb) {
      gutil.log('Compiling', "'" + chalk.cyan(file.path) + "'...");
      cb(null, file);
    }))
    .pipe(babel())
    .pipe(gulp.dest(dest));
});

gulp.task("watch", ["build"], function () {
  watch(src, function () {
    gulp.start("build");
  });
});
