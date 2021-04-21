const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/**/*'),
          to: path.resolve(__dirname, '../dist'),
          globOptions: {
            ignore: ['index.html']
          }
        }
      ]
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist')
  }
})