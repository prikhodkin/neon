"use strict"

import gulp from "gulp";
import clean from 'gulp-clean'
import paths from "../../config";

gulp.task("deploy:serv", () => {
  return gulp.src(paths.deploy.src)
    .pipe(gulp.dest(paths.deploy.dest))
});
