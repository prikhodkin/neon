import paths from "../../config";
import gulp from "gulp";
import plumber from "gulp-plumber";


gulp.task('vendor', ()=> {
    return gulp.src(paths.vendor.src)
      .pipe(plumber())
      .pipe(gulp.dest(paths.vendor.dest))
});
