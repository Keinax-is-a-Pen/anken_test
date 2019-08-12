const gulp = require('gulp');

//タスク毎にファイルを分割する
const requireDir = require('require-dir');
requireDir('./gulp/tasks/',{recurse:true});


//watch cssファイルの監視
gulp.task('watch', function () {
  gulp.watch( './src/**/*.scss', ['sass']);
   console.log("変更されました");
});
