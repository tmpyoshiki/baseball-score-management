const path = require("path");
const glob = require("glob");

/**
 * CSRビルド後のファイルを出力するメソッド
 * @param fileName ファイル名
 */
const path = (fileName) => `./src/view/${fileName}/CSR.tsx`;

module.exports = {
  resolve: {
    // 対象にする拡張子の指定（パッケージも含まれるので、.jsは必須）
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: {
    index: path("index"),
  },
  output: {
    // 書き出し先のディレクトリを指定(assets)
    path: path.resolve(__dirname, "dist/assets"),
    // 書き出すファイルの名前を指定(名前は変更しない)
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        // 拡張子が.jsか.jsxだった場合に適用するルール
        test: /\.ts(x?)$/,
        // node_modulesディレクトリは除外
        exclude: /node_modules/,
        use: [
          {
            // babelの設定
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                [
                  "@babel/preset-react",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },
};
