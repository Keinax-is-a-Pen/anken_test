const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const header = require('gulp-header');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');



// config.jsからscssタスクをconfigListとして読み込む

const configList = require('../config.js').sass;


Object.keys(configList).forEach((key) => {

gulp.task('sass', function() {
  // scss_commonをconfigとして変数化
  const config = configList[key];

  return gulp.src(configList.src)

  .pipe(plumber({//plumberプラグインの実行
   errorHandler: function(err) {//errorHandlerに渡した処理は、エラーを受け取った際に実行します
     console.log(err.messageFormatted);
     this.emit('end');//emit イベントを発火してデータを渡す 処理が終わったらendイベントを発火します.
   }
  }))
  .pipe(autoprefixer({
           browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
           cascade: false
       }))//ベンダーの付与　browsersのオプションでサポートしたいブラウザを指定。今回はメインブラウザの最新2バージョン、iOS 8.1以上、Android Browser 4.4以上
  .pipe(sass({outputStyle: 'expanded'}))//出力形式の種類　#nested, compact, compressed, expanded.
  .pipe(replace(/@charset "UTF-8";/g, ''))//@charset "UTF-8";自動生成された場合、@charset "UTF-8";の削除
  .pipe(header('@charset "UTF-8";\n\n'))//@charset "UTF-8";を追加



  // コンパイルしたファイルを指定のディレクトリに出力する
  // config.dest === dir.preview
  .pipe(gulp.dest(configList.dest));
  });
})
