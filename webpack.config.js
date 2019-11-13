const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
  const isDev = env && env.development ? true : false;

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    // plugins: [
    //   new webpack.ProgressPlugin(),
    //   new HtmlWebpackPlugin({template: './index.html'})
    // ],
  };
};
