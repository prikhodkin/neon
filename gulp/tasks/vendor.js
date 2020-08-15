import paths from "../../config";
import gulp from "gulp";

gulp.task('vendor', ()=> {
    return gulp.src(paths.vendor.src)
      .pipe(gulp.dest(paths.vendor.dest))
});
