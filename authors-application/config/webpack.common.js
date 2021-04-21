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
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../'),
      'node_modules'
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ModuleFederation({
      name: 'authors_application', // O atributo que guarda o nome da aplicação. Será utilizado ao importar esse módulo
      filename: 'remoteEntry.js', // O atributo que guarda o nome do arquivo que você precisa carregar nas aplicações que dependem dela
      exposes: { // O atributo onde defino os módulos que irei expor na federação e como acessá-los
        './AuthorsList': './src/components/AuthorsList/index.tsx'
      },
      shared: { // O atributo define quais dependências serão compartilhadas entre as aplicações
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Authors Application',
      template: path.resolve('./public/index.html')
    })
  ],
}