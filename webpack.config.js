const webpack = require('webpack')
const debug = process.env.NODE_ENV !== 'production'
var OfflinePlugin = require('offline-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  entry: ['./src/bundle.js'],
  module: {
    rules: [{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }, {
        test: /\.js|jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015',  { "modules": false }], 'stage-0'],
            plugins: ['react-hot-loader/babel', 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'react-css-modules']
          }
        }
      },
      { test: /\.(png|woff|woff2|otf|ttf|svg|eot|jpg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'scripts.min.js',
    publicPath: '/js/'
  },
  plugins: debug ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),


  ] : [

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false })
  ]
}
