module.exports = (() => {
  // 各ディレクトリを変数化
  const dir = {
    src: './src/', // ソースファイルを置くディレクトリ
    dest: './dest/lp/uniform_office/' // ビルドファイルを生成するディレクトリ
  };

  // 各ディレクトリを変数化
  // 各タスクの設定をconfigとして変数化
  const config = {
    // scssタスク
    // ソースファイルディレクトリ以下の*.scssファイルを対象に実行する。
    // ファイル名の先頭に_（アンダースコア）が付いているファイルは対象外
    // ディレクトリ構造を維持したままコンパイル結果をプレビューディレクトリに出力する
    sass: {
        src: [ dir.src + '**/*.scss'],
        dest: dir.dest,
    }
  };

  // configをexportする
  return config;
})();
