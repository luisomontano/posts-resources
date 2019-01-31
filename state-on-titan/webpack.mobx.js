const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: './sample-pokedex/mobx.jsx',
  devServer: {
    compress: true,
    hot: true,
    port: 8000,
    historyApiFallback: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              ['@babel/plugin-proposal-class-properties', { 'loose': true }]
            ]
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              ['@babel/plugin-proposal-class-properties', { 'loose': true }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './sample-pokedex/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
