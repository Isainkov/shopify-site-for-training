const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  clean = require("gulp-clean-css"),
  themeKit = require("@shopify/themekit");

gulp.task("sass", function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
      })
    )
    .pipe(clean({ compatibility: "ie11" }))
    .pipe(gulp.dest("./assets/"));
});

gulp.task("watch", function () {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
  themeKit.command("watch", {
    allowLive: true,
    env: "development",
  });
});
