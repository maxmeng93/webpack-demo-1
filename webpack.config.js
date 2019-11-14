const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function(env, argv) {
  const isDev = env && env.development ? true : false;
  console.log(env);

  return {
    mode: isDev ? 'development' : 'production',
    entry: {
      app: './src/index.js',
      print: './src/print.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '管理输出',
        template: './index.html'
      })
    ],
  };
};
