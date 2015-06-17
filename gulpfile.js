var gulp       = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    babel      = require("gulp-babel"),
    concat     = require("gulp-concat"),
    bower      = require("main-bower-files"),
    del        = require('del');

gulp.task("default", function () {
  // del(["dist/**/*"]);

  gulp.src(bower())
    .pipe(gulp.dest("dist/vendor"));

  gulp.src("src/index.html")
    .pipe(gulp.dest("dist"));

  gulp.src("src/assets/**/*")
    .pipe(gulp.dest("dist/assets"));

  gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
