// 引入 gulp
// less 将 less 文件编译成 css 文件
// clean_css 压缩 css
// rename 重命名文件，用于添加 .min.css 后缀
var gulp = require('gulp');
var less = require('gulp-less');
var clean_css = require('gulp-clean-css');
var rename = require('gulp-rename');

// 将 less 编译为 css
gulp.task('less', function () {
  gulp.src('./base.less')
    .pipe(less())
    .pipe(gulp.dest('./'));
});

// 压缩 css 文件并重命名
gulp.task('rename', function () {
  gulp.src('./base.less')
    .pipe(less())
    .pipe(gulp.dest("./"))
    .pipe(clean_css())
    .pipe(rename(function (path) {
      path.extname = ".min.css"
    }))
    .pipe(gulp.dest("./"));
});

// default task
gulp.task('default', function () {
  gulp.src('./base.less')
    .pipe(less())
    .pipe(gulp.dest("./"))
    .pipe(clean_css())
    .pipe(rename(function (path) {
      path.extname = ".min.css"
    }))
    .pipe(gulp.dest("./"));
});
