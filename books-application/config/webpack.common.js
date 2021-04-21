const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederation = require('webpack').container.ModuleFederationPlugin
const dependencies = require('../package.json').dependencies

module.exports = {
  entry: path.resolve('./src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../'),
      'node_modules'
    ],
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new ModuleFederation({
      name: 'books_application',
      filename: 'remoteEntry.js',
      exposes: {
        './Books': './src/components/BookList/index.tsx'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Books Application',
      template: path.resolve('./public/index.html')
    })
  ]
}