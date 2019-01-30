const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        },
      {
        test: /\.(scss|css)$/,
        use:["style-loader", "css-loader", "sass-loader"]
      },
      {
        //Problemet här var att det ska vara url-loader
         test: /\.(png|svg|jpg|gif)$/,
         use: [
             'url-loader'
         ]
       },
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  })
]
};
